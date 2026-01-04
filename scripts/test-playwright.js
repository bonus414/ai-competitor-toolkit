const { chromium } = require('playwright');
const path = require('path');

async function testPlaywright() {
  console.log('Testing Playwright MCP setup...');
  
  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();
  
  try {
    // Test navigation and screenshot
    console.log('Navigating to Leftshift One...');
    await page.goto('https://leftshiftone.com/en/', { waitUntil: 'networkidle' });
    
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, '..', 'screenshots', 'leftshift-one');
    const fs = require('fs');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    // Take homepage screenshot
    console.log('Taking homepage screenshot...');
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'homepage.png'),
      fullPage: true 
    });
    
    // Try to find and screenshot pricing page
    console.log('Looking for pricing page...');
    try {
      const pricingLink = await page.locator('a[href*="pricing"], a:has-text("Pricing")').first();
      if (await pricingLink.isVisible()) {
        await pricingLink.click();
        await page.waitForLoadState('networkidle');
        await page.screenshot({ 
          path: path.join(screenshotsDir, 'pricing.png'),
          fullPage: true 
        });
        console.log('Pricing page screenshot captured');
      }
    } catch (error) {
      console.log('Pricing page not found or accessible');
    }
    
    // Try to find and screenshot features page
    console.log('Looking for features page...');
    try {
      const featuresLink = await page.locator('a[href*="feature"], a:has-text("Feature")').first();
      if (await featuresLink.isVisible()) {
        await featuresLink.click();
        await page.waitForLoadState('networkidle');
        await page.screenshot({ 
          path: path.join(screenshotsDir, 'features.png'),
          fullPage: true 
        });
        console.log('Features page screenshot captured');
      }
    } catch (error) {
      console.log('Features page not found or accessible');
    }
    
    console.log('✅ Playwright test completed successfully!');
    console.log(`Screenshots saved to: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('❌ Error during Playwright test:', error);
  } finally {
    await browser.close();
  }
}

// Run the test
testPlaywright().catch(console.error);
