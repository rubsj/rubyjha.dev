# CLAUDE.md — rubyjha.dev Project Context

> Claude Code reads this file automatically at the start of every session.
> DO NOT repeat these rules in prompts — just describe the task.

## Project

Professional developer portfolio and technical blog for Ruby Jha at **https://rubyjha.dev**.
Positions Ruby as an Engineering Manager with deep AI/ML technical credibility.

- **Repo:** `rubsj/rubyjha.dev`
- **Stack:** Astro 5.0 + AstroWind theme + Tailwind CSS + MDX
- **Hosting:** Cloudflare Pages (auto-deploys on push to main)
- **Node:** 20 (set in `.nvmrc` and Cloudflare env)
- **OG Images:** astro-og-canvas (auto-generates per-page OG images at build time — already configured)

## Reference Documents

- **Requirements:** `requirements-rubyjha-dev.md` (full PRD — refer here for any spec questions)
- **Phase 1 Brief:** `rubyjha-dev-phase1-implementation-brief.md` (Phase 1 execution — complete)
- **Phase 2 Brief:** `rubyjha-dev-phase2-implementation-brief.md` (Phase 2 execution — current)
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

| What                                                                 | Where                      |
| -------------------------------------------------------------------- | -------------------------- |
| MDX components (Callout, MetricCard, etc.)                           | `src/components/mdx/`      |
| Page-level components (CareerTimeline, ProjectCard, SeriesNav, etc.) | `src/components/`          |
| Project content                                                      | `src/content/projects/`    |
| Blog content                                                         | `src/content/blog/`        |
| Static assets (resume PDF, OG images)                                | `public/`                  |
| Optimized images                                                     | `src/assets/images/`       |
| Prompt templates (Phase 2)                                           | `/prompts/`                |
| GitHub Actions workflows                                             | `.github/workflows/`       |
| Tag registry                                                         | `tags.json` (project root) |

## Content Voice

- First person: "I built", "I chose", "I learned"
- Direct, technically precise, no fluff
- Always include metrics and real numbers
- No corporate jargon, no humblebragging
- Show tradeoffs and honest failures
- Never use em-dashes (flags AI authorship)
- No performative LinkedIn influencer language ("Hot take," "theater")
- Short declarative sentences over clause-qualifier-clause constructions
- Opens with concrete, surprising findings — not chronological starts
- References Java/enterprise background as comparison frame where relevant

## Blog Categories (6 total)

| Category Slug            | Purpose                                       | Post Type     |
| ------------------------ | --------------------------------------------- | ------------- |
| `project-deep-dives`     | AI project walkthroughs with metrics          | AI technical  |
| `architecture-decisions` | ADR-based "why I chose X" posts               | AI technical  |
| `tutorials`              | How-to guides for tools/techniques            | AI technical  |
| `industry-insights`      | AI trends + opinions backed by experience     | AI / hybrid   |
| `engineering-leadership` | Team leadership, org decisions, people growth | Leadership    |
| `system-design`          | Architecture at scale, distributed systems    | System Design |

## Tag Registry

All blog post tags must exist in `tags.json` at project root. CI validates this on every PR.

**AI tags:** `rag`, `multi-agent`, `fine-tuning`, `llm-evaluation`, `synthetic-data`, `embeddings`, `vector-databases`, `prompt-engineering`, `python`, `crewai`, `langchain`, `pydantic`, `fastapi`

**Leadership tags:** `leadership`, `team-building`, `hiring`, `communication`, `technical-strategy`, `mentoring`, `incident-management`, `project-management`, `engineering-culture`

**System Design tags:** `system-design`, `distributed-systems`, `scalability`, `architecture`, `microservices`, `api-design`

**General tags:** `engineering-management`, `devops-ai`, `career`

## Content Pipeline (Phase 2)

- **GitHub Actions workflow:** `.github/workflows/generate-blog-post.yml`
- **Trigger:** `workflow_dispatch` with inputs: topic, category, tags, series, series_order, source_material
- **Flow:** Claude API call → MDX draft with `draft: true` → new branch → PR with 'draft' label → human review → merge → auto-deploy
- **Prompt templates:** `/prompts/deep-dive.md`, `/prompts/adr-to-blog.md`, `/prompts/tutorial.md`, `/prompts/industry-insight.md`, `/prompts/leadership.md`, `/prompts/system-design.md`
- **Model:** claude-sonnet-4-20250514 (cost-effective for generation)
- **Secret:** `ANTHROPIC_API_KEY` in GitHub repo secrets

## Content Validation CI (Phase 2)

- **Workflow:** `.github/workflows/validate-content.yml`
- **Trigger:** `on: pull_request` (paths: `src/content/blog/**`)
- **Check:** All frontmatter tags in MDX files must exist in `tags.json`
- **On failure:** Clear error message listing invalid tags

## Series Navigation (Phase 2)

- **Series landing pages:** `src/pages/series/[...slug].astro`
- **SeriesNav component:** `src/components/SeriesNav.astro` — prev/next within series, "Part X of Y"
- **Renders at:** TOP and BOTTOM of blog posts where `series` field is set
- **Existing series:** `9-ai-projects` (2 posts published, 8 more planned)

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

- **Phase 1 (MVP):** ✅ Complete — site is live, Lighthouse 95+ mobile / 100 desktop
- **Phase 2 (Content Engine):** 🔨 In progress — GitHub Actions pipeline, series nav, tag/category pages, Pagefind search
- **Phase 3 (Engagement):** Not started — Giscus, Buttondown newsletter
- **Phase 4 (RAG Chatbot):** Not started — depends on P5 completion

## Current Site State (as of Mar 20, 2026)

- **Published blog posts:** 2 (series intro + P1 deep-dive on LLM Judge calibration)
- **Published project pages:** P1, P2, P3, P4, P5 (full content)
- **AI Portfolio progress:** P1–P5 complete ✅
- **OG images:** astro-og-canvas configured and working (auto-generates per page)
- **Google Search Console:** verified, sitemap submitted
- **Tag pages:** `/tag/[tag]` — working
- **Category pages:** `/category/[cat]` — working (4 categories currently; extending to 6 in Phase 2)
- **What's missing:** GitHub Actions pipeline, prompt templates, SeriesNav, series pages, tag validation CI, Pagefind search, 2 new blog categories
