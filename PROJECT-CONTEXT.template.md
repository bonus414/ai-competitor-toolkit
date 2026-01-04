# Project Context - Quick Briefing

> **📝 TEMPLATE FILE**: Copy this to `PROJECT-CONTEXT.md` and customize with your product details.
> Delete this notice block when you're done customizing.

## What This Project Is
Automated competitor research system for **{YOUR_PRODUCT_NAME}** from **{YOUR_COMPANY}**. Focus: {YOUR_PRODUCT_CATEGORY - e.g., "document chat, AI document analysis, knowledge management"}.

## Our Product
- **{YOUR_PRODUCT_NAME}** ({YOUR_COMPANY_WEBSITE})
- Status: {BETA/LAUNCHED/IN_DEVELOPMENT}
- See `/our-products/` for full product details
- Core differentiators: {LIST_YOUR_KEY_DIFFERENTIATORS - e.g., "Privacy-focused, enterprise-ready"}

## What We're Researching
**{NUMBER} competitors in {NUMBER} tiers** (see `competitors.json`):
- **Tier 1 (must research)**: {LIST_TOP_COMPETITORS}
- **Tier 2 (should research)**: {LIST_SECONDARY_COMPETITORS}
- **Tier 3 (nice to have)**: {LIST_ADDITIONAL_COMPETITORS}

## Research Status
### ✅ Completed ({NUMBER})
{LIST_COMPLETED_COMPETITORS_WITH_REPORT_LINKS}

### ⏳ Pending ({NUMBER})
{LIST_PENDING_COMPETITORS}

## How It Works
1. **Playwright MCP** - Browser automation for screenshots and analysis
2. **Research template** (`research-template.md`) - Structured checklist covering:
   - Pricing & monetization
   - Product features & differentiators
   - Messaging & positioning
   - Design & UX
   - Social proof
   - Support & community
3. **Scripts** (`scripts/`) - Automation for batch or single competitor research
4. **Reports** (`reports/`) - Markdown outputs with findings

## Key Files to Read First
1. This file (`PROJECT-CONTEXT.md`) - You're reading it!
2. `competitors.json` - Who we're researching and status
3. `our-products/{your-product-name}.md` - Our product details
4. `research-template.md` - What to look for in competitors
5. Latest report in `reports/` - See what good output looks like

## Common Tasks
- **Research next competitor**: Use Playwright MCP to visit site, take screenshots, analyze per template
- **Update status**: Mark competitor as "completed" in `competitors.json` after research
- **Generate report**: Save findings to `reports/[competitor-name]-[date].md`
- **Batch research**: Process multiple competitors systematically

## Tools Available
- Playwright MCP browser tools (navigate, screenshot, click, etc.)
- Reddit MCP (for community sentiment research)
- Standard file operations (Read, Write, Edit, etc.)

## Important Notes
- Priority: {HIGH/MEDIUM/LOW} ({ADD_CONTEXT_LIKE "active sales focus"})
- Screenshot organization: `screenshots/[competitor-name]/[page].png`
- Report format: Follow template structure in `research-template.md`
- Keep `competitors.json` updated with research dates and status

## Last Session Summary
**Session Date**: {YYYY-MM-DD}

{BRIEF_SUMMARY_OF_WHAT_WAS_ACCOMPLISHED}

### Completed Research
1. **{Competitor Name}** - {KEY_INSIGHT}
2. **{Competitor Name}** - {KEY_INSIGHT}

### Key Deliverables
- **Batch report**: `reports/{report-name}.md`
- **Screenshots captured**: {NUMBER}
- **Updated**: `competitors.json` - marked completed

### Major Insights
- {INSIGHT_1}
- {INSIGHT_2}
- {INSIGHT_3}

### Competitive Threat Assessment
- **HIGH**: {Competitor} ({REASON})
- **MEDIUM**: {Competitor} ({REASON})
- **LOW**: {Competitor} ({REASON})

### Differentiation Opportunities for {YOUR_PRODUCT}
1. {OPPORTUNITY_1}
2. {OPPORTUNITY_2}
3. {OPPORTUNITY_3}

### Research Progress
- **Completed**: {X}/{TOTAL} competitors ({PERCENTAGE}%)
- **This session**: {NUMBER} competitors
- **Next priority**: {WHAT_TO_RESEARCH_NEXT}

---
*Update this file at the end of significant sessions to help future Claude instances get up to speed quickly.*
