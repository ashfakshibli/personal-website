# AGENT Guide: Personal Website Repository

## Repository Purpose
This repository hosts Ashfak Md Shibli's personal portfolio website.
Production URL: `https://ashfakshibli.com/`

The site is currently designed as a single-page experience with anchor navigation, while standalone route pages also exist for section-level rendering.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- next-themes
- ESLint
- Playwright (render verification utility)

Package manager: `npm`

## App Structure and Routing Context
Primary composition:
- `src/app/page.tsx`: one-page section composition with anchors.

Standalone section pages (also used as embedded section content):
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/publications/page.tsx`
- `src/app/awards/page.tsx`

Home/landing section components:
- `src/components/home/HeroSection.tsx`
- `src/components/home/CompactTimeline.tsx`
- `src/components/home/LatestNews.tsx`
- `src/components/home/TechnicalLogos.tsx`

Layout/navigation:
- `src/components/layout/Header.tsx`: nav links + active section behavior.
- `src/components/layout/Footer.tsx`: quick links and profile/contact links.

## Common Content Update Targets
Use these files first when requests involve content changes:
- Home and hero updates: `src/components/home/HeroSection.tsx`
- Timeline updates: `src/components/home/CompactTimeline.tsx`
- Latest updates/news: `src/components/home/LatestNews.tsx`
- About content: `src/app/about/page.tsx`
- Projects content: `src/app/projects/page.tsx`
- Publications content: `src/app/publications/page.tsx`
- Awards content: `src/app/awards/page.tsx`
- Navigation labels/anchors: `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- Global metadata/layout shell: `src/app/layout.tsx`

## Commands and Validation
Core local commands:
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run verify:render`

Minimum validation for normal change requests:
1. `npm run lint`
2. `npm run build`

Add task-specific checks when needed (for example route render verification).

## Deployment Context
Deploy workflow file:
- `.github/workflows/deploy.yaml`

Current deployment behavior:
1. Trigger: push to `main`.
2. CI build runs in GitHub Actions.
3. Artifact is deployed to Namecheap hosting over SSH.
4. Passenger app reload is triggered on the server.

Useful deployment verification commands:
- `gh run list --workflow deploy.yaml --limit 5`
- `gh run view <run-id>`

## Default Agent Execution Policy
For any user request that includes code/content changes, complete the full delivery cycle unless the user explicitly says otherwise.

Required end-to-end flow:
1. Implement the requested change in code/content.
2. Run project validation checks:
   - `npm run lint`
   - `npm run build`
   - Any additional project checks required by the current task.
3. If checks pass, commit with a clear scoped message.
4. Push to GitHub (current branch unless user requests another branch).
5. Verify deployment workflow was triggered for the pushed commit.
6. Wait for deploy completion and confirm final status.
7. Report back with:
   - Commit SHA
   - Deploy run URL
   - Deploy result (`success` or `failed`)

## Failure Handling Policy
1. If validation fails, fix issues before commit/push.
2. If deployment fails, investigate logs, apply a fix, and repeat the flow from validation through deploy confirmation.
3. Stop only when deploy succeeds or when blocked by missing credentials/infrastructure access; in that case report the blocker clearly.
