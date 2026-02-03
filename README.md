# Personal Website

This repository contains the source code for Ashfak Md Shibli's portfolio website.

## Table of Contents
- [Overview](#overview)
- [Live Site](#live-site)
- [One-Page Navigation Anchors](#one-page-navigation-anchors)
- [Current Sections](#current-sections)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Commands](#development-commands)
- [Deployment](#deployment)
- [Updating Content](#updating-content)
- [Contact](#contact)

## Overview
The site is built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

The latest design is a single-page portfolio experience with smooth anchor navigation from the header.

## Live Site
Production URL: `https://ashfakshibli.com/`

## One-Page Navigation Anchors
Header navigation and footer quick links point to in-page anchors:
- Home: `/#home`
- News: `/#news`
- About: `/#about`
- Projects: `/#projects`
- Publications: `/#publications`
- Awards: `/#awards`

## Current Sections
1. Home (hero, timeline, tech stack)
2. Latest News
3. About
4. Projects
5. Publications
6. Awards

## Key Features
- Single-page anchor navigation with active header section tracking
- Responsive layout across mobile and desktop
- Dark mode support using `next-themes`
- Smooth animations and transitions using Framer Motion
- Render verification script with Playwright screenshots

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- next-themes
- ESLint

## Project Structure
```text
src/
  app/
    page.tsx                # One-page composition and section anchors
    about/page.tsx          # About section content (standalone + embedded)
    projects/page.tsx       # Projects section content (standalone + embedded)
    publications/page.tsx   # Publications section content (standalone + embedded)
    awards/page.tsx         # Awards section content (standalone + embedded)
  components/
    layout/Header.tsx       # Header navigation and active section logic
    layout/Footer.tsx       # Footer with anchor quick links
    home/                   # Hero, timeline, latest news, tech stack
scripts/
  verify-render.mjs         # Route render checks + screenshots
```

## Getting Started
1. Install dependencies:
```bash
npm install
```

2. Start local development server:
```bash
npm run dev
```

3. Open:
```text
http://localhost:3000
```

## Development Commands
```bash
npm run lint
npm run build
npm run verify:render
```

## Deployment
Deployment is handled by GitHub Actions using `.github/workflows/deploy.yaml`.

Current trigger:
- Push to `main`

## Updating Content
Main files to update content quickly:
- Home and tech stack: `src/components/home/HeroSection.tsx`, `src/components/home/TechnicalLogos.tsx`
- Latest news: `src/components/home/LatestNews.tsx`
- About: `src/app/about/page.tsx`
- Projects: `src/app/projects/page.tsx`
- Publications: `src/app/publications/page.tsx`
- Awards: `src/app/awards/page.tsx`

## Contact
Name: Ashfak Md Shibli

Email: `shibli.emon@gmail.com`
