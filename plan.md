# Personal Website Update Plan (Scope B)

Date: February 2, 2026
Primary source of truth: `public/Ashfak_Shibli_CV_January_2026.pdf`

## Guardrails (Confirmed)
- Work only in dedicated branch: `updates-2026`.
- Replace current resume file usage with January 2026 CV.
- Keep public contact as email/social only (no phone/location exposure).
- Update About experience with corrected dates/details from CV.
- Do not update timeline chronology in this pass.
- Add Research Collaborations in About.
- Add Under Review publications subsection at top.
- Add Personal Projects section.
- Add dedicated Awards page.

## Mandatory Validation Loop (After Every Code Fix Batch)
- After each code update batch (for each step below), run:
  - `npm run lint`
  - `npm run build`
  - `npm run dev` startup smoke check
- Do not continue to the next implementation step until checks pass or the issue is fixed.

## Step-by-Step Implementation

1) Finalize update payload from CV
- Build a concise content map for:
  - About experience (Athlete Den intern/full-time split + Samsung + TA/RA + collaborations)
  - Personal projects (AI Course Advisor, Generalized Price Tracker)
  - Under-review publications
  - Awards list
- Keep wording web-readable (short bullets) while preserving factual accuracy.

2) Update home CV actions
- File: `src/components/home/HeroSection.tsx`
- Replace both PDF references:
  - `fileUrl` for modal viewer
  - `href` for download link
- Point both to `/Ashfak_Shibli_CV_January_2026.pdf`.
- Rename CTA text to `View CV` and `Download CV` for consistency.
- Run mandatory validation loop.

3) Update About page content
- File: `src/app/about/page.tsx`
- Refresh experience cards/sections to align with CV chronology and role details.
- Reflect Athlete Den as:
  - Intern (May 2023 - Aug 2023)
  - Software Engineer (May 2024 - Current)
- Add a Research Collaborations block for:
  - Speed Lab, Florida Atlantic University
  - University of Tennessee Chattanooga
- Keep contact/privacy constraints unchanged.
- Run mandatory validation loop.

4) Add Personal Projects section
- File: `src/app/projects/page.tsx`
- Add third category: `Personal Projects`.
- Add entries:
  - AI Course Advisor
  - Generalized Price Tracker
- Include short descriptions + key tech tags + highlights.
- Run mandatory validation loop.

5) Add Under Review publications section at top
- File: `src/app/publications/page.tsx`
- Introduce separate `underReviewPublications` dataset.
- Render this section above the existing published list.
- Include status/date context (e.g., Under review, Dec 2025 / Jan 2026).
- Keep existing published publications intact.
- Run mandatory validation loop.

6) Create dedicated Awards page
- New file: `src/app/awards/page.tsx`
- Create an awards-focused layout (card/timeline style) with entries from CV, including:
  - Eminence Award 2025 (MS Best Paper)
  - Employee of the Year 2025 (Athlete Den)
  - Samsung ICON of the Month (May 2019, Nov 2020)
  - Outstanding Collaborator (2021)
  - Best Paper (Feb 2018)
- Add concise context lines for each recognition.
- Run mandatory validation loop.

7) Wire Awards into navigation + fix UX consistency
- Files:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
- Add `Awards` route link in header nav.
- Add `Awards` quick link in footer.
- Fix footer Google Scholar URL to match header profile URL.
- Run mandatory validation loop.

8) Light polish and QA
- Verify layout behavior on desktop + mobile for:
  - Home CV buttons
  - About new sections
  - Projects Personal Projects category
  - Publications ordering
  - Awards page
- Run lint/build checks (`npm run lint`, `npm run build`) and resolve issues.
- Final content check against CV for factual/date consistency.

9) Git finalize on `updates-2026`
- Confirm clean result from all validation checkpoints.
- Stage related files in logical groups.
- Commit with clear scoped messages, for example:
  - `feat(home): switch resume actions to january 2026 cv`
  - `feat(about): refresh experience and add research collaborations`
  - `feat(projects): add personal projects section`
  - `feat(publications): add under-review subsection`
  - `feat(awards): add dedicated awards page and navigation links`
  - `fix(footer): align google scholar link with header profile`
- Push branch to GitHub: `git push -u origin updates-2026`.

## Deliverables
- Updated `agent.md` with confirmed clarifications.
- New `plan.md` (this document).
- Code updates across pages/components listed above.
- Verified branch workflow and commit/push process on `updates-2026`.

## Acceptance Criteria
- CV download/view points to `Ashfak_Shibli_CV_January_2026.pdf` everywhere used.
- About reflects corrected experience chronology and includes collaborations.
- Publications page shows Under Review section above published works.
- Projects page includes Personal Projects.
- Awards page exists and is linked from header/footer.
- Footer Google Scholar link is corrected.
- Timeline left unchanged in this iteration.
- All code-fix batches pass lint/build/run checks before moving forward.
