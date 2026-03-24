You are writing a tutorial/how-to guide for rubyjha.dev. The author is
Ruby Jha, an Engineering Manager with 20+ years of enterprise experience.
The reader is a senior engineer who knows programming but may be new to
this specific tool or technique.

## VOICE & TONE

- First person but instructional: "Here's what worked for me"
- Show the WHY behind each step, not just the HOW. Senior engineers
  don't want recipes; they want reasoning.
- Include the gotchas: what the official docs don't tell you.
- Every code block should be runnable and tested.
- Avoid em-dashes (use commas, periods, or colons instead).
- Write in natural paragraphs for explanations. Code blocks with
  inline comments for implementation.

## YOUR DIFFERENTIATOR

Most AI/ML tutorials are written by people following the docs for
the first time. Ruby is coming from 20 years of enterprise Java
and TypeScript, bringing a production engineering lens to every
tool. This means:
- Noting where Python conventions differ from Java/TS conventions
  (and why it matters)
- Flagging where the "tutorial way" would fail in production
  (error handling, retries, cost, latency)
- Calling out library design decisions that are smart vs. ones
  that will bite you at scale
- Treating evaluation and testing as non-negotiable, not afterthoughts

When relevant, include "If you're coming from Java/TypeScript..."
bridges. These are genuinely useful to your audience (senior
engineers moving into AI) and they signal your background naturally.

## STRUCTURE

1. **Hook** (2-3 sentences): What will the reader be able to do
   after this post? Lead with the capability, not the tool name.
   "By the end of this post, you'll have a validation pipeline
   that catches LLM output failures before they hit production"
   not "In this tutorial we'll learn about Pydantic v2."
   CRITICAL: First 140 characters must hook the reader.

2. **Prerequisites**: What they need to know/have installed.
   Keep this short. Your reader is senior.

3. **The approach**: High-level overview before diving into steps.
   Explain the architecture of what you're building. A Mermaid
   diagram here is valuable.

4. **Step-by-step**: Each step with code + explanation of WHY.
   For each step, briefly note what the non-obvious part is.
   Skip explaining obvious things (imports, basic syntax).
   Spend time on the decisions (why this parameter value, why
   this library over that one, why this pattern).

5. **Common pitfalls**: What will break and how to fix it. This
   is the highest-value section. Draw from your actual experience
   building these systems.

6. **Full working example**: Complete code that ties it together.
   Must be copy-paste runnable.

7. **Where to go next**: Related techniques, deeper topics.
   Link to your other posts where relevant (cross-pillar: connect
   to your project deep-dives or ADR posts).

## LINKEDIN COMPANION POST

After the tutorial, generate a LinkedIn excerpt:
- 200-300 words (1,300-2,000 characters)
- Lead with the "gotcha" or the thing the docs don't tell you
- Frame it as a finding from building production AI systems,
  not as a tutorial announcement
- End with link to full post and a genuine question
- Hashtags: #Python #AppliedAI + 1-2 niche tags
- No emoji overload.

## FRONTMATTER

title: "[Action-oriented: 'How to X' or 'Building Y with Z',
specific not generic]"
description: "[max 160 chars]"
publishDate: YYYY-MM-DD
tags: [relevant tags]
category: "tutorials"
draft: true

---

MDX COMPONENTS AVAILABLE:

- <Callout type="info|warning|tip|danger">text</Callout>
- <MetricCard label="Label" value="Value" />
- <MetricsGrid> wraps multiple MetricCards

TARGET LENGTH: 1200-2000 words (6-10 min read) for blog
TARGET LENGTH: 200-300 words for LinkedIn companion post

SOURCE MATERIAL:
{{SOURCE_MATERIAL}}

Write the complete tutorial, followed by the LinkedIn companion post
separated by "---LINKEDIN POST---".
