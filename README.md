# Competitor Research Toolkit

A template repository for systematic competitor research using AI-powered browser automation. Perfect for product teams, founders, and marketers who want to deeply understand their competitive landscape.

## ✨ What This Does

This toolkit helps you:
- 🔍 **Systematically research** competitors with a structured methodology
- 📸 **Capture screenshots** automatically using Playwright browser automation
- 📊 **Generate detailed reports** analyzing pricing, features, messaging, and positioning
- 📈 **Track progress** across multiple competitors with built-in status tracking
- 🤖 **Leverage AI** (via Claude Code) to accelerate research and analysis

## 🚀 Quick Start

### 1. **Get the Prerequisites**

- [Claude Code CLI](https://github.com/anthropics/claude-code) - AI-powered development tool
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Browser automation for Claude

### 2. **Customize the Template**

Follow the **[SETUP-GUIDE.md](SETUP-GUIDE.md)** - it takes 5 minutes!

Quick version:
```bash
# 1. Document your product
cp our-products.template/your-product.template.md our-products/my-product.md
# (then fill in the details)

# 2. List your competitors
cp competitors.template.json competitors.json
# (then add your competitors)

# 3. Create project context
cp PROJECT-CONTEXT.template.md PROJECT-CONTEXT.md
# (then customize)
```

### 3. **Start Researching**

Open in Claude Code and say:
```
"Research [Competitor Name] following the research template"
```

Or use the automation scripts (optional).

## 📁 Directory Structure

```
.
├── SETUP-GUIDE.md            # 👈 START HERE - Customization guide
├── README.md                 # This file
├── research-template.md      # Research methodology checklist
│
├── competitors.template.json # Template for your competitor list
├── PROJECT-CONTEXT.template.md # Template for project briefing
├── our-products.template/    # Template for documenting your product
│
├── competitors.json          # Your competitor list (create from template)
├── PROJECT-CONTEXT.md        # Your project briefing (create from template)
├── our-products/             # Your product docs (create from template)
│
├── screenshots/              # Auto-generated during research
├── reports/                  # Generated research reports
├── data/                     # Additional research data
└── scripts/                  # Automation scripts (optional)
```

## 🎯 What You'll Research

The template guides you through analyzing:

- **Pricing & Monetization** - Pricing models, tiers, free trials
- **Product & Features** - Core capabilities and differentiators
- **Messaging & Positioning** - Target audience, value props, tone
- **Social Proof** - Customer testimonials, case studies, reviews
- **Design & UX** - Website design, navigation, user experience
- **Marketing & GTM** - Lead capture, content strategy, channels
- **Support & Community** - Documentation, support options, resources

Customize the research areas to fit your industry!

## 📋 Three Ways to Research

### Option 1: Interactive with Claude Code (Recommended)
1. Open this repo in Claude Code
2. Say: "Research [Competitor Name] following the research template"
3. Claude will:
   - Navigate to the competitor's website
   - Take screenshots of key pages
   - Analyze using the research template
   - Generate a detailed report in `reports/`
   - Update competitor status in `competitors.json`

### Option 2: Using Scripts (Advanced)
```bash
# Research a single competitor
node scripts/research-competitor.js "Competitor Name" "https://competitor-url.com"

# Batch research all pending competitors
node scripts/batch-research.js
```

### Option 3: Manual Research
1. Open `research-template.md` as your guide
2. Visit competitor websites
3. Fill out the checklist manually
4. Save notes to `reports/[competitor-name]-[date].md`

## 📊 Output & Organization

### Reports
Generated reports are saved in `reports/` with this structure:
```markdown
# [Competitor Name] - Competitive Analysis
Date: [YYYY-MM-DD]

## Overview
## Pricing
## Features
## Messaging
## Strengths
## Weaknesses
## Key Takeaways
## Screenshots
```

### Screenshots
Automatically organized by competitor:
```
screenshots/
  ├── competitor-a/
  │   ├── homepage.png
  │   ├── pricing.png
  │   └── features.png
  └── competitor-b/
      ├── homepage.png
      └── pricing.png
```

### Progress Tracking
Update `competitors.json` as you complete research:
- Mark `status: "completed"`
- Add `researched_date: "2025-01-04"`
- Add insights in `notes` field

## 🎨 Customization

This is a **template** - make it yours!

### Customize Research Focus
Edit `research-template.md` to add industry-specific sections:
- **SaaS**: API quality, developer experience, uptime claims
- **B2C**: Mobile app, onboarding flow, customer support
- **E-commerce**: Checkout flow, shipping options, return policy
- **Enterprise**: Security certs, compliance, SLAs

### Organize Competitors Your Way
Don't like the tier system? Change the structure in `competitors.json`:
```json
"competitors": {
  "direct_competitors": [...],
  "indirect_competitors": [...],
  "emerging_threats": [...]
}
```

### Add Custom Fields
Track what matters to you:
```json
{
  "name": "Competitor X",
  "funding": "$50M Series B",
  "employee_count": "500+",
  "threat_level": "high"
}
```

## 🛠️ Available Scripts (Optional)

Scripts are in `scripts/` directory:
- `research-competitor.js` - Single competitor research
- `batch-research.js` - Batch research multiple competitors
- `competitor-research.js` - Core research class
- `test-playwright.js` - Test your Playwright setup

**Note:** Scripts are optional - you can do everything interactively with Claude Code!

## 💡 Tips for Success

1. **Document your product first** - You can't compare without a baseline
2. **Start with Tier 1** - Research your direct competitors before nice-to-haves
3. **Take comprehensive screenshots** - Homepage, pricing, features, about
4. **Look beyond features** - Analyze messaging, positioning, and target market
5. **Update regularly** - Markets change, so should your research
6. **Look for gaps** - Where are competitors weak? Where are they strong?
7. **Track insights** - Use `PROJECT-CONTEXT.md` to summarize learnings

## 📚 Additional Resources

- **SETUP-GUIDE.md** - Detailed customization instructions
- **research-template.md** - The research methodology
- **PROJECT-CONTEXT.template.md** - Example project briefing structure
- **our-products.template/** - Product documentation templates

## 🤝 Contributing

This is an open-source template! Contributions welcome:
- Share improvements to the research template
- Add new automation scripts
- Improve documentation
- Share examples of great competitive research

## 📄 License

[Add your license here]

## ⭐ Acknowledgments

Built with:
- [Claude Code](https://github.com/anthropics/claude-code) - AI-powered development
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) - Browser automation
- Love for systematic competitive intelligence ❤️

---

**Ready to start?** → Read [SETUP-GUIDE.md](SETUP-GUIDE.md) to customize this template for your product!
