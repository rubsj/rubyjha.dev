# Blog Content Pipeline

## How It Works

1. Go to GitHub Actions → "Generate Blog Post Draft" → Run workflow
2. Fill in: topic, category, tags, series (optional), source material
3. The workflow:
   - Selects the prompt template matching your category
   - Injects your source material into the template
   - Calls Claude API (claude-sonnet-4-20250514) to generate an MDX draft
   - Creates a branch and opens a PR with the draft
4. You review the PR, edit for voice and accuracy, then merge
5. Cloudflare Pages auto-deploys on merge

## Templates

| File | Category | Expected Length | Edit Time |
|------|----------|----------------|-----------|
| deep-dive.md | project-deep-dives | 1500-2500 words | 30-40 min |
| adr-to-blog.md | architecture-decisions | 1000-1800 words | 15-25 min |
| tutorial.md | tutorials | 1200-2000 words | 25-35 min |
| industry-insight.md | industry-insights | 800-1500 words | 20-30 min |
| leadership.md | engineering-leadership | 1000-1800 words | 30-40 min |
| system-design.md | system-design | 1500-2500 words | 25-35 min |

## Template Placeholder

Each template has a `{{SOURCE_MATERIAL}}` placeholder. The workflow replaces
this with the source_material input before sending to Claude API.

## Cost

~$0.01-0.05 per post (Claude Sonnet via API)

## Notes

- All generated posts have `draft: true` — they never go live without human review
- Tags must exist in `tags.json` at project root (CI validates this)
- The workflow derives the slug from the topic (lowercase, hyphenated)
