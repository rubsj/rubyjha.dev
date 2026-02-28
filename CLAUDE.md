# CLAUDE.md — rubyjha.dev Project Context

> Claude Code reads this file automatically at the start of every session.
> DO NOT repeat these rules in prompts — just describe the task.

## Working Mode

When given a task that involves multiple files or structural changes:

1. First produce a PLAN listing: files to create/modify, what changes in each, and the order of operations
2. Wait for my approval before executing
3. After execution, run `astro build` and report results

## Project

Professional developer portfolio and technical blog for Ruby Jha at **https://rubyjha.dev**.
Positions Ruby as an Engineering Manager with deep AI/ML technical credibility.

- **Repo:** `rubsj/rubyjha.dev`
- **Stack:** Astro 5.0 + AstroWind theme + Tailwind CSS + MDX
- **Hosting:** Cloudflare Pages (auto-deploys on push to main)
- **Node:** 20 (set in `.nvmrc` and Cloudflare env)

## Reference Documents

- **Requirements:** `requirements.md` (full PRD — refer here for any spec questions)
- **Implementation Brief:** `rubyjha-dev-phase1-implementation-brief.md` (execution blocks A-D)
- **Resume:** `Ruby_Jha_EM_Feb10.docx` (source of truth for career facts and metrics)
- **Execution Plan:** `rubyjha-dev-plan.html` (phased roadmap, session breakdown)

## AstroWind — The #1 Rule

AstroWind already provides: dark/light mode, responsive design, SEO meta tags, sitemap.xml, robots.txt, RSS feed, blog pagination, image optimization, skip-to-content, semantic HTML, navigation, footer.

- **NEVER rebuild these.** Verify they work. Configure them. Extend them.
- **Check `src/components/widgets/` BEFORE creating any new component.**
- **Navigation is config-driven** — find the config file, don't hardcode in layouts.
- **Extend content schemas, don't replace.** AstroWind's blog collection exists — add fields on top.
- **Tailwind:** customize in `tailwind.config.mjs` by extending, not replacing.
- **Keep AstroWind as upstream** — don't fork or eject theme internals.

## Technology Rules

- TypeScript for all new `.ts` / `.astro` files
- Use Astro's `<Image>` component, not `<img>` tags
- Mermaid diagrams: Astro island (`client:idle`), CDN-based (not npm)
- Giscus comments: Astro island (`client:visible`) — Phase 3
- Zero client-side JS by default — islands only for interactive components
- Images: `src/assets/` (for Astro optimization) or `public/` (passthrough)
- External links: `target="_blank" rel="noopener noreferrer"`

## File Organization

| What                                                      | Where                   |
| --------------------------------------------------------- | ----------------------- |
| MDX components (Callout, MetricCard, etc.)                | `src/components/mdx/`   |
| Page-level components (CareerTimeline, ProjectCard, etc.) | `src/components/`       |
| Project content                                           | `src/content/projects/` |
| Blog content                                              | `src/content/blog/`     |
| Static assets (resume PDF, OG images)                     | `public/`               |
| Optimized images                                          | `src/assets/images/`    |

## Content Voice

- First person: "I built", "I chose", "I learned"
- Direct, technically precise, no fluff
- Always include metrics and real numbers
- No corporate jargon, no humblebragging
- Show tradeoffs and honest failures

## Quality Gates (every session)

1. `astro build` — zero errors required before committing
2. Dark/light mode works on every new or modified component
3. Responsive at 375px (mobile), 768px (tablet), 1024px+ (desktop)
4. All images have `alt` text
5. All external links use `target="_blank" rel="noopener noreferrer"`
6. Lighthouse targets: Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95

## Key Facts (for content accuracy)

- 20+ years total experience
- 7+ years direct people management
- Teams up to 12 engineers (US, India, Poland)
- $250K/month operational cost savings (State Street)
- 60% reduction in support demand (State Street)
- 40+ enterprise customers (State Street)
- $106K/month contractor budget managed
- 7 global regions (US, Canada, UK, EMEA, Australia, Singapore, Japan)
- ~44 million lives covered (Centene healthcare platform)
- 16+ production teams adopted React component framework
- Zero non-compliance findings in CMMI Level 3 audits (EY)
- 9 AI projects: Synthetic Data, RAG Eval, Fine-Tuning, Resume Coach, Production RAG, Feedback Intel, Jira Agent, Digital Clone, DevOps RCA

## Career Timeline

| Company      | Role                | Years        | Highlight                               |
| ------------ | ------------------- | ------------ | --------------------------------------- |
| HSBC         | Team Lead           | 2004–2010    | CIO Award                               |
| Sapient      | Senior Consultant   | 2010–2012    | Financial services delivery             |
| EY           | Engineering Manager | 2012–2015    | 12-person global org, Golden Beam Award |
| Centene      | Technical Lead      | 2016–2019    | Healthcare platform, 44M lives          |
| State Street | Engineering Manager | 2019–Present | $250K/mo savings, 40+ customers         |
| AI Portfolio | Builder             | 2025–Present | 9 production-grade AI systems           |

## Phase Status

- **Phase 1 (MVP):** ✅ Complete — site is live
- **Phase 2 (Content Engine):** In progress — GitHub Actions pipeline, series nav, tag/category pages
- **Phase 3 (Engagement):** Not started — Giscus, Buttondown newsletter
- **Phase 4 (RAG Chatbot):** Not started — depends on P5 completion

## AI Project Status

| #   | Project                           | Status    | Key Metric                  |
| --- | --------------------------------- | --------- | --------------------------- |
| P1  | Synthetic Data Generation         | Completed | 36 → 0 failures (−100%)     |
| P2  | RAG Evaluation Pipeline           | Completed | Recall@5 0.747, 557 tests   |
| P3  | Contrastive Embedding Fine-Tuning | Completed | Spearman −0.22 → +0.85      |
| P4  | AI-Powered Resume Coach           | Completed | 66pp template gap, χ²=32.74 |
| P5  | Production RAG Pipeline           | Planned   | —                           |
| P6  | Feedback Intelligence Agent       | Planned   | —                           |
| P7  | Jira Sprint Planning Agent        | Planned   | —                           |
| P8  | Digital Clone System              | Planned   | —                           |
| P9  | DevOps RCA Assistant              | Planned   | —                           |
