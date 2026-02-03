# Website + CV Update Discovery (as of February 2, 2026)

## Objective
Update the current website so it reflects the latest CV content in `public/Ashfak_Shibli_CV_January_2026.pdf`, while understanding what was built from earlier resumes:
- `public/Ashfak_Resume_2025.pdf`
- `public/Ashfak_Shibli_Software_Engineer.pdf`

## Sources Reviewed
- New CV text extracted from `public/Ashfak_Shibli_CV_January_2026.pdf`
- Old resume text extracted from `public/Ashfak_Resume_2025.pdf`
- Old software-engineer resume text extracted from `public/Ashfak_Shibli_Software_Engineer.pdf`
- Current site content:
  - `src/components/home/HeroSection.tsx`
  - `src/components/home/CompactTimeline.tsx`
  - `src/components/home/LatestNews.tsx`
  - `src/app/about/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/publications/page.tsx`
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/home/TechnicalLogos.tsx`
  - `src/app/layout.tsx`

## What The Current Website Shows

### Home (`src/app/page.tsx` + home components)
- Hero with title: **Researcher & Software Engineer**, subtitle: **Computer Science Grad**.
- Resume modal + download both point to `Ashfak_Shibli_Software_Engineer.pdf`.
- Compact timeline shows:
  - 2024: Software Engineer at Athlete Den LLC
  - 2023: MS CS (Tennessee Tech + NJIT) + robotics volunteer
  - 2022: Lead Software Engineer at Samsung R&D
- Latest news list ends at June 2025 (SmishViz at ACM CODASPY 2025).

### About (`src/app/about/page.tsx`)
- Education cards:
  - Tennessee Tech (MS CS, 2023-2024, AI & Cybersecurity)
  - NJIT (MS CS, 2022-2023, Healthcare Security)
- Experience cards:
  - Athlete Den LLC (Software Engineer, 2023-Present)
  - Samsung R&D (Lead Engineer, 2018-2022)
- Technical expertise and tools are concise/high-level.

### Projects (`src/app/projects/page.tsx`)
- Professional: Athlete Den AI Sports Analysis, Samsung Family Hub, Samsung Galaxy Buds.
- Research: SMS Phishing Detection, Healthcare Data Protection.
- No personal side-project section.

### Publications (`src/app/publications/page.tsx`)
- 5 published items shown (2019, 2023, 2024 poster, 2024 conference, 2025 CODASPY).
- No "under review" section.

### Global/Header/Footer
- Header has correct GitHub/LinkedIn/Google Scholar/email links.
- Footer Google Scholar link is placeholder (`user=your-id`) and inconsistent with header.
- Metadata title/description currently framed as "Software Engineer & Researcher".

## What The New CV (January 2026) Adds/Emphasizes

### Contact/Profile
- Phone number present.
- Location explicitly: Chattanooga, TN.
- Website + LinkedIn + Google Scholar all highlighted.

### Education
- MS CS (NJIT + Tennessee Tech), Sep 2022 - Aug 2024, GPA 4.0.
- BSc CSE (CUET), Mar 2013 - Nov 2017, GPA 3.53.

### Experience
- Athlete Den:
  - Intern: May 2023 - Aug 2023
  - Software Engineer (full-time): May 2024 - Current
  - More detail on ML pipeline architecture, mobile AI optimization, data infra, leadership/commercialization.
- **New ongoing role not represented on site:**
  - Voluntary Industry Research Collaborator (July 2024 - Current), including:
    - Speed Lab, Florida Atlantic University
    - University of Tennessee Chattanooga
- TTU GTA and NJIT GR/TA are detailed as formal experience blocks.

### Skills
- Broader stack than site currently shows:
  - ML: TensorFlow, scikit-learn, BERT, CNN/DNN
  - Data science/analysis: pandas, NumPy, NLTK, NetworkX
  - Visualization: matplotlib, seaborn, plotly, graphviz, D3.js
  - Tools/platforms: Docker, Label Studio, Selenium, pytest/XCTest, Carla
  - Languages include Dart/Flutter and shell scripting

### Publications
- Current published works remain relevant.
- **New under-review entries in CV:**
  - "Secure Yet Fragile..." (Nature Scientific Reports, under review, Jan 2026)
  - "IterVLM..." (under review, Jan 2026)
  - "SMS Phishing: Attack Characterization..." (IEEE Access, under review, Dec 2025)

### Awards, Leadership, Mentoring
- Eminence Award 2025 (MS Best Paper).
- Employee of the Year 2025 at Athlete Den.
- Patent-pending sports analytics system.
- Mentoring graduate students at FAU.

### Personal Projects
- AI Course Advisor (Gemini API, Flask, CI/CD deployment).
- Generalized Price Tracker (Claude API, generalized price monitoring).

### Community Engagement
- First Lego League support (Feb 2024).
- UTC open-house K-12 STEM exhibition (Feb 2025).

## Delta Analysis: What Likely Needs Website Updates

## 1) Must-Update Content
- Resume/CV link target should likely move from `Ashfak_Shibli_Software_Engineer.pdf` to `Ashfak_Shibli_CV_January_2026.pdf` (`src/components/home/HeroSection.tsx`).
- Athlete Den timeline/experience should reflect intern vs full-time split (current site mostly uses 2023-Present).
- Add the ongoing Research Collaborator role (FAU + UTC), which is currently missing across pages.
- Add/update publication section to handle under-review papers (if desired publicly).
- Add awards/recognition details currently absent.
- Add personal projects currently absent.

## 2) Strongly Recommended Content Refresh
- Expand technical skills to better match CV breadth.
- Refresh latest news with 2025-2026 milestones (awards, under-review submissions, collaborations, mentoring, community outreach).
- Align About and Projects narratives to the same chronology and role details.

## 3) Quality/Consistency Fixes Found
- Footer Google Scholar URL should be corrected to match header (`src/components/layout/Footer.tsx`).
- Some date statements differ between older resumes and current CV; website should adopt January 2026 CV as source of truth.

## Suggested File-Level Impact Map
- Hero + CV links: `src/components/home/HeroSection.tsx`
- Timeline content: `src/components/home/CompactTimeline.tsx`
- Latest updates/news: `src/components/home/LatestNews.tsx`
- About education/experience/skills: `src/app/about/page.tsx`
- Projects catalog (including personal projects): `src/app/projects/page.tsx`
- Publications (published + under review strategy): `src/app/publications/page.tsx`
- Footer link consistency: `src/components/layout/Footer.tsx`
- SEO/meta wording update (optional): `src/app/layout.tsx`

## Current Assumption For Planning
Use `Ashfak_Shibli_CV_January_2026.pdf` as the canonical source when conflicts exist with old resumes.

## Clarifications Confirmed (User Decisions)
Date confirmed: February 2, 2026

1. Resume replacement:
   - Replace current resume usage with `Ashfak_Shibli_CV_January_2026.pdf`.
   - Do not keep dual resume options on home page.

2. Public contact privacy:
   - Keep contact style as-is (email/social links only).
   - Do not add public phone number or explicit location to main site contact blocks.

3. Experience date policy:
   - Treat January 2026 CV as source of truth for experience chronology.
   - Update dates/details in About experience section.
   - No need to update timeline dates/content right now.

4. Research collaboration placement:
   - Add Research Collaborations section/details in About page.

5. Publications organization:
   - Add an "Under Review" subsection.
   - Place "Under Review" above published publications.

6. Projects expansion:
   - Add Personal Projects section including:
     - AI Course Advisor
     - Generalized Price Tracker

7. Awards presentation:
   - Create a dedicated Awards page.
   - Design it as an awards-focused page (not just a small subsection).

8. Execution scope:
   - Scope B selected: content updates + small UX cleanup.
   - Include consistency fixes (e.g., footer Google Scholar link mismatch).

## Execution Workflow Addendum (Confirmed)
Date confirmed: February 2, 2026

9. Branch strategy:
   - Use dedicated branch: `updates-2026`.
   - Keep all CV-2026 related website updates in this branch.

10. Validation policy after each code fix:
    - After every code-modification batch for a fix, run:
      - `npm run lint`
      - `npm run build`
      - Run check (`npm run dev` startup smoke check)
    - Fix any breakage before proceeding to the next fix batch.

11. Git completion policy:
    - If all checks pass, commit with clear, scoped messages.
    - Push updates from `updates-2026` to remote GitHub branch.
    - Keep commit history readable by grouping related changes logically.
