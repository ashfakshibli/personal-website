#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';

const PORT = Number(process.env.RENDER_CHECK_PORT || 3105);
const HOST = process.env.RENDER_CHECK_HOST || '127.0.0.1';
const BASE_URL = process.env.RENDER_CHECK_BASE_URL || `http://${HOST}:${PORT}`;
const SKIP_SERVER = process.env.RENDER_CHECK_SKIP_SERVER === '1';
const OUT_DIR = path.resolve(process.cwd(), 'artifacts/render-check');
const LOG_PATH = path.join(OUT_DIR, 'dev-server.log');
const REPORT_PATH = path.join(OUT_DIR, 'report.json');

const routes = [
  {
    path: '/',
    requiredTexts: ['Researcher & Software Engineer', 'Latest News', 'View CV']
  },
  {
    path: '/about',
    requiredTexts: ['Education', 'Experience', 'Research Collaborations']
  },
  {
    path: '/projects',
    requiredTexts: ['Professional', 'Research', 'Personal']
  },
  {
    path: '/publications',
    requiredTexts: ['Under Review', 'Published']
  },
  {
    path: '/awards',
    requiredTexts: ['Total Recognitions', 'Employee of the Year']
  }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 90000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      if (res.status >= 200 && res.status < 500) return;
    } catch {
      // retry
    }
    await sleep(500);
  }
  throw new Error(`Timed out waiting for dev server at ${url}`);
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function startDevServer() {
  const child = spawn(
    'npm',
    ['run', 'dev', '--', '--port', String(PORT), '--hostname', HOST],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: '1'
      },
      stdio: ['ignore', 'pipe', 'pipe']
    }
  );

  let logs = '';
  child.stdout.on('data', (chunk) => {
    logs += chunk.toString();
  });
  child.stderr.on('data', (chunk) => {
    logs += chunk.toString();
  });

  return {
    child,
    getLogs: () => logs
  };
}

async function stopDevServer(child) {
  if (!child || child.killed) return;
  child.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    sleep(5000)
  ]);
  if (!child.killed) child.kill('SIGKILL');
}

async function verifyRoute(browser, routeConfig) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 2200 }
  });
  const page = await context.newPage();

  const pageErrors = [];
  const requestFailures = [];
  const consoleErrors = [];

  page.on('pageerror', (err) => pageErrors.push(String(err)));
  page.on('requestfailed', (req) => {
    requestFailures.push(`${req.method()} ${req.url()} -> ${req.failure()?.errorText ?? 'FAILED'}`);
  });
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  const url = `${BASE_URL}${routeConfig.path}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  const renderStats = await page.evaluate((requiredTexts) => {
    const root = document.querySelector('main') ?? document.body;
    const allElements = Array.from(root.querySelectorAll('*'));
    const visibleElements = allElements.filter((el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        rect.width > 4 &&
        rect.height > 4 &&
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        Number(style.opacity || 1) > 0.05
      );
    });

    const textContent = (root.textContent || '').replace(/\s+/g, ' ').trim();
    const styleSheetCount = document.styleSheets.length;
    const hiddenOpacityNodes = allElements.filter((el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return rect.width > 4 && rect.height > 4 && Number(style.opacity || 1) <= 0.05;
    }).length;

    const required = requiredTexts.map((text) => {
      const candidates = Array.from(document.querySelectorAll('h1,h2,h3,h4,p,span,button,a,li,div'));
      const match = candidates.find((el) => {
        if (!(el.textContent || '').includes(text)) return false;
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
          rect.width > 4 &&
          rect.height > 4 &&
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          Number(style.opacity || 1) > 0.05
        );
      });
      return { text, found: Boolean(match) };
    });

    return {
      textLength: textContent.length,
      styleSheetCount,
      totalNodes: allElements.length,
      visibleNodes: visibleElements.length,
      hiddenOpacityNodes,
      required
    };
  }, routeConfig.requiredTexts);

  const safeName = routeConfig.path === '/' ? 'home' : routeConfig.path.slice(1).replace(/\//g, '-');
  const screenshotPath = path.join(OUT_DIR, `${safeName}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await context.close();

  const requiredMissing = renderStats.required.filter((item) => !item.found).map((item) => item.text);
  const hasHardErrors = pageErrors.length > 0 || consoleErrors.length > 0;

  const pass =
    renderStats.styleSheetCount > 0 &&
    renderStats.textLength > 200 &&
    renderStats.visibleNodes > 40 &&
    requiredMissing.length === 0 &&
    !hasHardErrors;

  return {
    route: routeConfig.path,
    screenshotPath,
    pass,
    metrics: renderStats,
    requiredMissing,
    pageErrors,
    consoleErrors,
    requestFailures
  };
}

async function main() {
  await ensureDir(OUT_DIR);

  const server = SKIP_SERVER ? null : startDevServer();
  let browser;
  let results = [];
  let exitCode = 0;

  try {
    await waitForServer(BASE_URL);
    browser = await chromium.launch({ headless: true });

    for (const route of routes) {
      const result = await verifyRoute(browser, route);
      results.push(result);
      const icon = result.pass ? 'PASS' : 'FAIL';
      console.log(`${icon} ${result.route}`);
      if (!result.pass) {
        console.log(`  Missing: ${result.requiredMissing.join(', ') || 'none'}`);
        console.log(`  JS errors: ${result.pageErrors.length + result.consoleErrors.length}`);
      }
    }

    const failed = results.filter((r) => !r.pass);
    if (failed.length > 0) {
      exitCode = 1;
    }
  } catch (error) {
    exitCode = 1;
    results.push({
      route: 'global',
      pass: false,
      error: String(error)
    });
    console.error(error);
  } finally {
    if (browser) await browser.close();
    await writeFile(REPORT_PATH, JSON.stringify({ baseUrl: BASE_URL, results }, null, 2), 'utf8');
    await writeFile(
      LOG_PATH,
      server ? server.getLogs() : 'Using externally managed dev server.\n',
      'utf8'
    );
    if (server) {
      await stopDevServer(server.child);
    }
  }

  if (exitCode !== 0) {
    console.error(`Render verification failed. See ${REPORT_PATH}`);
    process.exit(1);
  } else {
    console.log(`Render verification passed. Screenshots saved under ${OUT_DIR}`);
  }
}

main();
