const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

class CompetitorResearcher {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async initialize() {
    console.log('🚀 Initializing Playwright browser...');
    this.browser = await chromium.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    this.page = await this.context.newPage();
  }

  async handleCookieConsent() {
    try {
      console.log('🍪 Checking for cookie consent dialogs...');
      
      // Common cookie consent selectors
      const cookieSelectors = [
        'button:has-text("Accept")',
        'button:has-text("Accept All")',
        'button:has-text("Allow")',
        'button:has-text("I Accept")',
        'button:has-text("OK")',
        '[data-testid*="accept"]',
        '[id*="accept"]',
        '[class*="accept"]',
        'button[aria-label*="accept" i]',
        '#BorlabsDialogBackdrop + * button',
        '.cookie-consent button',
        '.gdpr-consent button'
      ];
      
      for (const selector of cookieSelectors) {
        try {
          const button = this.page.locator(selector).first();
          if (await button.isVisible({ timeout: 2000 })) {
            await button.click();
            console.log('✅ Cookie consent accepted');
            await this.page.waitForTimeout(1000); // Wait for dialog to disappear
            return;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      console.log('ℹ️  No cookie consent dialog found');
    } catch (error) {
      console.log('⚠️  Error handling cookie consent:', error.message);
    }
  }

  async researchCompetitor(competitorName, url) {
    console.log(`\n🔍 Researching ${competitorName}...`);
    
    // Create screenshots directory
    const screenshotsDir = path.join(__dirname, '..', 'screenshots', competitorName.toLowerCase().replace(/\s+/g, '-'));
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    const researchData = {
      name: competitorName,
      url: url,
      timestamp: new Date().toISOString(),
      screenshots: [],
      findings: {}
    };

    try {
      // Navigate to homepage
      console.log(`📱 Navigating to ${url}...`);
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Handle cookie consent dialogs
      await this.handleCookieConsent();
      
      // Take homepage screenshot
      const homepagePath = path.join(screenshotsDir, 'homepage.png');
      await this.page.screenshot({ path: homepagePath, fullPage: true });
      researchData.screenshots.push('homepage.png');
      console.log('✅ Homepage screenshot captured');

      // Extract basic information
      researchData.findings.basicInfo = await this.extractBasicInfo();
      
      // Look for pricing page
      await this.capturePricingPage(screenshotsDir, researchData);
      
      // Look for features page
      await this.captureFeaturesPage(screenshotsDir, researchData);
      
      // Look for about page
      await this.captureAboutPage(screenshotsDir, researchData);
      
      // Extract additional content
      researchData.findings.content = await this.extractContent();
      
      console.log(`✅ Research completed for ${competitorName}`);
      return researchData;
      
    } catch (error) {
      console.error(`❌ Error researching ${competitorName}:`, error.message);
      researchData.error = error.message;
      return researchData;
    }
  }

  async extractBasicInfo() {
    try {
      const basicInfo = {};
      
      // Extract title
      basicInfo.title = await this.page.title();
      
      // Extract main headline
      const headline = await this.page.locator('h1').first().textContent().catch(() => '');
      basicInfo.headline = headline;
      
      // Extract meta description
      const metaDesc = await this.page.locator('meta[name="description"]').getAttribute('content').catch(() => '');
      basicInfo.metaDescription = metaDesc;
      
      // Look for pricing information on homepage
      const pricingText = await this.page.locator('text=/pricing|price|cost|plan/i').first().textContent().catch(() => '');
      basicInfo.pricingMentioned = pricingText.length > 0;
      
      return basicInfo;
    } catch (error) {
      console.log('⚠️  Error extracting basic info:', error.message);
      return {};
    }
  }

  async capturePricingPage(screenshotsDir, researchData) {
    try {
      console.log('💰 Looking for pricing page...');
      
      // Try different selectors for pricing links
      const pricingSelectors = [
        'a[href*="pricing"]',
        'a[href*="price"]',
        'a[href*="plan"]',
        'a:has-text("Pricing")',
        'a:has-text("Price")',
        'a:has-text("Plans")'
      ];
      
      for (const selector of pricingSelectors) {
        try {
          const link = this.page.locator(selector).first();
          if (await link.isVisible({ timeout: 5000 })) {
            // Scroll to element first
            await link.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(500);
            
            // Try to click with force if needed
            await link.click({ force: true, timeout: 10000 });
            await this.page.waitForLoadState('networkidle');
            
            // Handle any new cookie dialogs
            await this.handleCookieConsent();
            
            const pricingPath = path.join(screenshotsDir, 'pricing.png');
            await this.page.screenshot({ path: pricingPath, fullPage: true });
            researchData.screenshots.push('pricing.png');
            console.log('✅ Pricing page screenshot captured');
            return;
          }
        } catch (e) {
          console.log(`⚠️  Could not click pricing link with selector: ${selector}`);
        }
      }
      
      console.log('ℹ️  No pricing page found');
    } catch (error) {
      console.log('⚠️  Error capturing pricing page:', error.message);
    }
  }

  async captureFeaturesPage(screenshotsDir, researchData) {
    try {
      console.log('⚡ Looking for features page...');
      
      const featuresSelectors = [
        'a[href*="feature"]',
        'a[href*="capability"]',
        'a[href*="solution"]',
        'a:has-text("Features")',
        'a:has-text("Capabilities")',
        'a:has-text("Solutions")'
      ];
      
      for (const selector of featuresSelectors) {
        const link = this.page.locator(selector).first();
        if (await link.isVisible()) {
          await link.click();
          await this.page.waitForLoadState('networkidle');
          
          const featuresPath = path.join(screenshotsDir, 'features.png');
          await this.page.screenshot({ path: featuresPath, fullPage: true });
          researchData.screenshots.push('features.png');
          console.log('✅ Features page screenshot captured');
          return;
        }
      }
      
      console.log('ℹ️  No features page found');
    } catch (error) {
      console.log('⚠️  Error capturing features page:', error.message);
    }
  }

  async captureAboutPage(screenshotsDir, researchData) {
    try {
      console.log('ℹ️  Looking for about page...');
      
      const aboutSelectors = [
        'a[href*="about"]',
        'a[href*="company"]',
        'a:has-text("About")',
        'a:has-text("Company")'
      ];
      
      for (const selector of aboutSelectors) {
        try {
          const link = this.page.locator(selector).first();
          if (await link.isVisible({ timeout: 5000 })) {
            // Scroll to element first
            await link.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(500);
            
            // Try to click with force if needed
            await link.click({ force: true, timeout: 10000 });
            await this.page.waitForLoadState('networkidle');
            
            // Handle any new cookie dialogs
            await this.handleCookieConsent();
            
            const aboutPath = path.join(screenshotsDir, 'about.png');
            await this.page.screenshot({ path: aboutPath, fullPage: true });
            researchData.screenshots.push('about.png');
            console.log('✅ About page screenshot captured');
            return;
          }
        } catch (e) {
          console.log(`⚠️  Could not click about link with selector: ${selector}`);
        }
      }
      
      console.log('ℹ️  No about page found');
    } catch (error) {
      console.log('⚠️  Error capturing about page:', error.message);
    }
  }

  async extractContent() {
    try {
      const content = {};
      
      // Extract all headings
      const headings = await this.page.locator('h1, h2, h3').allTextContents();
      content.headings = headings;
      
      // Extract key phrases
      const keyPhrases = await this.page.locator('text=/AI|artificial intelligence|machine learning|automation|productivity|efficiency/i').allTextContents();
      content.keyPhrases = [...new Set(keyPhrases)].slice(0, 10);
      
      // Extract pricing mentions
      const pricingMentions = await this.page.locator('text=/free|trial|subscription|monthly|yearly|pricing|cost/i').allTextContents();
      content.pricingMentions = [...new Set(pricingMentions)].slice(0, 10);
      
      return content;
    } catch (error) {
      console.log('⚠️  Error extracting content:', error.message);
      return {};
    }
  }

  async generateReport(researchData) {
    const reportPath = path.join(__dirname, '..', 'reports', `${researchData.name.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.md`);
    
    const report = `# ${researchData.name} - Automated Research Report
Date: ${new Date().toISOString().split('T')[0]}
Generated by: Playwright MCP

## Overview
- **URL**: ${researchData.url}
- **Research Date**: ${researchData.timestamp}
- **Screenshots Captured**: ${researchData.screenshots.length}

## Basic Information
- **Title**: ${researchData.findings.basicInfo?.title || 'N/A'}
- **Headline**: ${researchData.findings.basicInfo?.headline || 'N/A'}
- **Meta Description**: ${researchData.findings.basicInfo?.metaDescription || 'N/A'}
- **Pricing Mentioned on Homepage**: ${researchData.findings.basicInfo?.pricingMentioned ? 'Yes' : 'No'}

## Content Analysis
### Key Headings
${researchData.findings.content?.headings?.map(h => `- ${h}`).join('\n') || 'None found'}

### Key Phrases
${researchData.findings.content?.keyPhrases?.map(p => `- ${p}`).join('\n') || 'None found'}

### Pricing Mentions
${researchData.findings.content?.pricingMentions?.map(p => `- ${p}`).join('\n') || 'None found'}

## Screenshots
${researchData.screenshots.map(s => `- ${s}: \`/screenshots/${researchData.name.toLowerCase().replace(/\s+/g, '-')}/${s}\``).join('\n')}

## Notes
This report was generated automatically using Playwright MCP. For detailed analysis, review the captured screenshots and consider manual verification of key findings.

${researchData.error ? `\n## Errors\n${researchData.error}` : ''}
`;

    fs.writeFileSync(reportPath, report);
    console.log(`📄 Report saved to: ${reportPath}`);
    return reportPath;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
async function main() {
  const researcher = new CompetitorResearcher();
  
  try {
    await researcher.initialize();
    
    // Research Leftshift One
    const researchData = await researcher.researchCompetitor('Leftshift One', 'https://leftshiftone.com/en/');
    
    // Generate report
    await researcher.generateReport(researchData);
    
    console.log('\n🎉 Competitor research completed successfully!');
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    await researcher.close();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = CompetitorResearcher;
