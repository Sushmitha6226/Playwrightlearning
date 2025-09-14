import { test, expect } from '@playwright/test';

test('Verify Add Employee', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator("//input[@placeholder='Username']").fill('Admin')
  await page.locator("//input[@type='password']").fill('admin123')
  await page.locator("//button[@type='submit']").click()
   
  await page.locator("//li[contains(.,'PIM')]").click()

  await expect(page.locator("div#app>div>div>header")).toBeVisible
  await page.locator("//li[contains(.,'Add Employee')]").click()

  await page.locator("//input[@placeholder='First Name']").fill('Sushmitha')
  await page.locator("//input[@placeholder='Last Name']").fill('M')
  await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill('1508')
  await page.locator("//button[contains(.,'Save')]").click()


})