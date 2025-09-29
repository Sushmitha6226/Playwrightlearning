import { test, expect } from '@playwright/test';

test('OrangeHRM Buzz post verification', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username and password
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  // Click login button
  await page.click('button[type="submit"]');

  // Click on Buzz menu item
  await page.click('a[href="/web/index.php/buzz/viewBuzz"]');

  // Enter text in "whats on your mind"
  const postText = 'Playwright test post ' + Date.now();
  await page.fill('textarea[placeholder="What\'s on your mind?"]', postText);

  // Post the message
  await page.click('button:has-text("Post")');

  // Verify the post appears
  await expect(page.locator(`text=${postText}`)).toBeVisible();
});