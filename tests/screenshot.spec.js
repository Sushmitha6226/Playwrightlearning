// @ts-check
const { test, expect } = require('@playwright/test');

test('Take Screenshot Example', async ({ page }) => {
  // Navigate to page
  await page.goto('https://demoqa.com/');

  // Take a full page screenshot
  await page.screenshot({ path: 'fullpage.png', fullPage: true });

  // Take a screenshot of a specific element
  const element = await page.locator('#app');
  await element.screenshot({ path: 'element.png' });
});