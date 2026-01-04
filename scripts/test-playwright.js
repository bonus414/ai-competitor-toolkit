const { chromium } = require('playwright');
const path = require('path');

async function testPlaywright() {
  console.log('🧪 Testing Playwright setup...\n');

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  try {
    // Test with a simple, reliable website
    const testUrl = 'https://example.com';
    console.log(`📱 Navigating to ${testUrl}...`);
    await page.goto(testUrl, { waitUntil: 'networkidle', timeout: 30000 });

    // Create test screenshots directory
    const fs = require('fs');
    const screenshotsDir = path.join(__dirname, '..', 'screenshots', 'test');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Take screenshot
    console.log('📸 Taking test screenshot...');
    await page.screenshot({
      path: path.join(screenshotsDir, 'test.png'),
      fullPage: true
    });

    // Extract some basic content
    const title = await page.title();
    const heading = await page.locator('h1').first().textContent();

    console.log('\n✅ Playwright test completed successfully!');
    console.log(`📄 Page title: ${title}`);
    console.log(`📝 Main heading: ${heading}`);
    console.log(`📸 Screenshot saved to: ${screenshotsDir}/test.png`);
    console.log('\n💡 Your Playwright setup is working correctly!');
    console.log('💡 You can now use the competitor research scripts.');

  } catch (error) {
    console.error('❌ Error during Playwright test:', error);
    console.error('\n⚠️  Please check:');
    console.error('   1. Playwright is installed (npm install playwright)');
    console.error('   2. Browsers are installed (npx playwright install)');
    console.error('   3. You have internet connectivity');
  } finally {
    await browser.close();
  }
}

// Run the test
testPlaywright().catch(console.error);
