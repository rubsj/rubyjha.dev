You are converting an Architecture Decision Record (ADR) into a blog post
for rubyjha.dev. The author is Ruby Jha. The ADR is a formal technical
document — the blog post should be its narrative counterpart.

VOICE & TONE:

- Same as deep-dive template (first person, direct, metrics-driven)
- But MORE narrative: tell the story of the decision
- "I was debugging X when I realized..." / "The first approach failed because..."
- Make the reader feel they were in the room when the decision was made
- Avoid em-dashes (use commas, periods, or colons instead)

TRANSFORMATION RULES:

- ADR "Context" → Blog "The situation" (add personal experience)
- ADR "Decision" → Blog "What I chose and why" (add the debugging story)
- ADR "Alternatives Considered" → Blog "The paths I didn't take"
  (explain WHY each was rejected with specifics)
- ADR "Consequences" → Blog "What happened next" (add real metrics)
- Strip any remaining formulaic AI patterns ("In this ADR we...")
- Add Java/TypeScript parallels where relevant (Ruby's background)

STRUCTURE:

1. **Hook** — The moment of realization or the failure that triggered
   the decision
2. **The situation** — Context: what system, what constraint, what was breaking
3. **Options I considered** — 2-4 alternatives with honest pros/cons
4. **What I chose** — The decision + the reasoning chain
5. **The result** — Metrics, code examples, before/after
6. **When you should choose differently** — Intellectual honesty about
   when this decision DOESN'T apply

## FRONTMATTER:

title: "[Decision framed as an insight, not 'ADR-001: X over Y']"
description: "[max 160 chars]"
publishDate: YYYY-MM-DD
tags: [relevant tags]
category: "architecture-decisions"
draft: true

---

TARGET LENGTH: 1000-1800 words (5-9 min read)

SOURCE ADR:
{{SOURCE_MATERIAL}}
