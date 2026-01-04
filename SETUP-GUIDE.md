# Setup Guide - Customize This Template

Welcome! This guide will help you customize this competitor research template for your product.

## 🎯 Quick Start (5 minutes)

Follow these steps in order:

### 1. Document Your Product

```bash
# Copy the product template
cp our-products.template/your-product.template.md our-products/my-product.md

# Edit and fill in your product details
# Replace all {PLACEHOLDER} values
```

**Key sections to complete:**
- Product overview and tagline
- Core value proposition
- Key features (what you offer)
- Pricing (critical for comparisons)
- Target customers
- Your main differentiators

### 2. List Your Competitors

```bash
# Copy the competitors template
cp competitors.template.json competitors.json

# Edit and add your actual competitors
```

**Tips:**
- **Tier 1** = Direct competitors you must understand
- **Tier 2** = Secondary competitors worth researching
- **Tier 3** = Nice-to-have or niche competitors
- Add 5-15 competitors total to start
- You can always add more later

### 3. Create Project Context

```bash
# Copy the project context template
cp PROJECT-CONTEXT.template.md PROJECT-CONTEXT.md

# Fill in your details
```

This becomes your "quick briefing" file for anyone (or any AI) picking up the research.

### 4. Clean Up Template Files (Optional)

Once you've created your versions, you can delete the templates:

```bash
# Optional - remove template files to reduce clutter
rm competitors.template.json
rm PROJECT-CONTEXT.template.md
rm -rf our-products.template/
```

Or keep them as reference - your choice!

---

## 📋 Complete Customization Checklist

Use this checklist to ensure you've customized everything:

### Essential Files (Must Do)
- [ ] Create `our-products/{your-product}.md` from template
- [ ] Create `competitors.json` from template
- [ ] Create `PROJECT-CONTEXT.md` from template
- [ ] Update README.md title/description (optional)

### Product Documentation (`our-products/{your-product}.md`)
- [ ] Product name, URL, and status
- [ ] Tagline and value proposition
- [ ] Key features organized by category
- [ ] Pricing tiers and details
- [ ] Target customers and industries
- [ ] Top 5 differentiators
- [ ] List of direct competitors

### Competitor List (`competitors.json`)
- [ ] Replace `product_focus` with your product name
- [ ] Replace `research_scope` with your market category
- [ ] Add Tier 1 competitors (must research)
- [ ] Add Tier 2 competitors (should research)
- [ ] Add Tier 3 competitors (nice to have)
- [ ] Update metadata: product, status, priority
- [ ] Set total_competitors count

### Project Context (`PROJECT-CONTEXT.md`)
- [ ] Replace {YOUR_PRODUCT_NAME} and {YOUR_COMPANY}
- [ ] List your product category/focus area
- [ ] Explain your product status (beta/launched/etc.)
- [ ] List research priority (high/medium/low) and why
- [ ] Keep "Last Session Summary" section for updates

---

## 🛠️ Prerequisites

Before you start researching, make sure you have:

### 1. Claude Code CLI
You should already have this if you're reading this!

### 2. Playwright MCP Server
**Install:** Follow instructions at https://github.com/microsoft/playwright-mcp

**Configure:** Add to your Claude Code MCP settings

**Test:** Run `scripts/test-playwright.js` (if using scripts)

### 3. Optional: Reddit MCP
For community sentiment research about competitors

---

## 🚀 Start Researching

Once customized, you're ready to research! You have options:

### Option 1: Interactive with Claude Code

Open this repo in Claude Code and say:
```
"Research [Competitor Name] following the research template"
```

Claude will:
- Visit the competitor's website
- Take screenshots
- Analyze based on the research template
- Save findings to reports/

### Option 2: Using Scripts

```bash
# Research a single competitor
node scripts/research-competitor.js "Competitor Name" "https://competitor-url.com"

# Batch research all pending competitors
node scripts/batch-research.js
```

### Option 3: Manual Research

1. Open `research-template.md`
2. Visit competitor websites manually
3. Fill out the checklist
4. Save to `reports/[competitor-name]-[date].md`

---

## 📊 Research Workflow

Here's the recommended workflow:

### 1. **Before Starting**
- [ ] Your product is documented in `our-products/`
- [ ] Competitors are listed in `competitors.json`
- [ ] You've reviewed `research-template.md`

### 2. **During Research**
- [ ] Use Playwright to visit competitor sites
- [ ] Take screenshots (homepage, pricing, features)
- [ ] Follow research template checklist
- [ ] Document findings in `reports/`
- [ ] Update competitor status in `competitors.json`

### 3. **After Each Session**
- [ ] Mark competitors as "completed" in `competitors.json`
- [ ] Update `PROJECT-CONTEXT.md` with session summary
- [ ] Review reports for insights
- [ ] Identify differentiation opportunities

---

## 📁 Directory Structure Explained

```
.
├── competitors.json           # Your competitor list (create from template)
├── competitors.template.json  # Template to copy (delete after setup)
├── PROJECT-CONTEXT.md         # Your project briefing (create from template)
├── PROJECT-CONTEXT.template.md # Template to copy (delete after setup)
├── research-template.md       # Research checklist (use as-is)
├── SETUP-GUIDE.md            # This file
├── README.md                 # General overview
│
├── our-products/             # Your product docs (create from template)
│   └── {your-product}.md
│
├── our-products.template/    # Template directory (delete after setup)
│   ├── README.md
│   └── your-product.template.md
│
├── screenshots/              # Auto-generated during research
│   └── {competitor-name}/
│       ├── homepage.png
│       └── pricing.png
│
├── reports/                  # Research findings (auto-generated)
│   └── {competitor-name}-{date}.md
│
├── data/                     # Additional research data
│
└── scripts/                  # Automation scripts (optional)
    ├── research-competitor.js
    └── batch-research.js
```

---

## 🎨 Customization Tips

### Add Custom Research Focus Areas

Edit `research-template.md` to add sections specific to your industry:

**Example for SaaS products:**
- API documentation quality
- Developer experience
- Uptime/reliability claims

**Example for B2C products:**
- Mobile app experience
- Onboarding flow
- Customer support options

### Organize Competitors Differently

Don't like the 3-tier system? Change it!

```json
"competitors": {
  "direct_competitors": [...],
  "indirect_competitors": [...],
  "emerging_threats": [...]
}
```

### Track Additional Metadata

Add custom fields to competitor entries:

```json
{
  "name": "Competitor X",
  "url": "...",
  "status": "completed",
  "researched_date": "2025-01-04",
  "employee_count": "500-1000",
  "funding": "$50M Series B",
  "threat_level": "high"
}
```

---

## ❓ Common Questions

**Q: Do I need to use the scripts?**
A: No! You can do everything manually or with Claude Code interactively.

**Q: Can I research competitors for multiple products?**
A: Yes! Create multiple files in `our-products/` and maintain separate competitor lists or use one combined list.

**Q: What if I don't have pricing yet?**
A: That's fine - document what you're planning or use "TBD" for now. You can still compare other aspects.

**Q: Should I delete the template files?**
A: It's up to you - they won't interfere with anything, but removing them reduces clutter.

**Q: Can I make this public with my research?**
A: Be careful! Competitor research often contains strategic insights. Consider keeping your repo private.

---

## 🆘 Need Help?

**Issues with templates:**
- Check that you've replaced ALL `{PLACEHOLDER}` values
- Make sure JSON is valid (use a JSON validator)
- Verify file names match what's referenced

**Issues with research:**
- Review `research-template.md` for guidance
- Look at existing reports in `reports/` as examples
- Ask Claude Code for help with specific competitors

**Issues with tools:**
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Claude Code: https://github.com/anthropics/claude-code

---

## ✅ You're Ready!

Once you've completed the customization checklist, you're ready to start researching competitors.

**Next steps:**
1. Pick your first Tier 1 competitor
2. Say to Claude Code: "Research [Competitor Name]"
3. Review the generated report
4. Repeat!

Good luck with your competitive research! 🚀
