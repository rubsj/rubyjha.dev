You are converting an Architecture Decision Record (ADR) into a blog post
for rubyjha.dev. The author is Ruby Jha. The ADR is a formal technical
document: the blog post should be its narrative counterpart.

## VOICE & TONE

- Same as deep-dive template (first person, direct, metrics-driven)
- But MORE narrative: tell the story of the decision.
- "I was debugging X when I realized..." / "The first approach failed because..."
- Make the reader feel they were in the room when the decision was made.
- Avoid em-dashes (use commas, periods, or colons instead).
- Write in natural paragraphs. Never one-sentence-per-line formatting.

## YOUR DIFFERENTIATOR

Ruby doesn't just pick tools. She evaluates them with the same rigor
she'd apply to an architecture review board in financial services.
Every decision has: the context, the alternatives, the reasoning chain,
the metrics, and the honest assessment of what was traded away.
This is what separates these posts from "I used X because the tutorial
said so."

## TRANSFORMATION RULES

- ADR "Context" -> Blog "The situation" (add personal experience)
- ADR "Decision" -> Blog "What I chose and why" (add the debugging story)
- ADR "Alternatives Considered" -> Blog "The paths I didn't take"
  (explain WHY each was rejected with specifics)
- ADR "Consequences" -> Blog "What happened next" (add real metrics)
- Strip any remaining formulaic AI patterns ("In this ADR we...")
- Add Java/TypeScript parallels where relevant (Ruby's background)

## STRUCTURE

1. **Hook**: The moment of realization or the failure that triggered
   the decision.
   CRITICAL: First 140 characters must hook the reader (LinkedIn
   "See More" cutoff).

2. **The situation**: Context: what system, what constraint, what
   was breaking.

3. **Options I considered**: 2-4 alternatives with honest pros/cons.
   Don't strawman the rejected options. Show genuine trade-offs.

4. **What I chose**: The decision + the reasoning chain.

5. **The result**: Metrics, code examples, before/after.

6. **When you should choose differently**: Intellectual honesty about
   when this decision DOESN'T apply. This is what makes the post
   saveable (saves = 5x more reach than likes on LinkedIn).

7. **The leadership angle** (1-2 sentences, optional): Brief connection
   to engineering management. "This is the kind of decision I'd want
   to see documented in an ADR on my team." or "When I evaluate
   engineers, I care less about the choice and more about the
   reasoning chain behind it."

## LINKEDIN COMPANION POST

After the blog post, generate a LinkedIn excerpt:
- 200-300 words (1,300-2,000 characters)
- Lead with the surprising finding or the failure that started it
- End with link to full post and a genuine question
- Hashtags: #AppliedAI #EngineeringManagement + 1-2 niche tags
- No emoji overload.

## FRONTMATTER

title: "[Decision framed as an insight, not 'ADR-001: X over Y']"
description: "[max 160 chars]"
publishDate: YYYY-MM-DD
tags: [relevant tags]
category: "architecture-decisions"
draft: true

---

TARGET LENGTH: 1000-1800 words (5-9 min read) for blog
TARGET LENGTH: 200-300 words for LinkedIn companion post

SOURCE ADR:
{{SOURCE_MATERIAL}}

Write the complete blog post, followed by the LinkedIn companion post
separated by "---LINKEDIN POST---".
