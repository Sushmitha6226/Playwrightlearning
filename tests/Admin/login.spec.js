import { test, expect } from '@playwright/test';

test('Verify Login with Valid credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill(process.env.APP_USERNAME)

    await page.locator("//input[@type='password']").fill(process.env.APP_PASSWORD)

    await page.locator("//button[@type='submit']").click()

    // verify method1

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    // or

    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()


})


test('Verify Login with Valid Username and Invalid Password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill('Admin')

    await page.locator("//input[@type='password']").fill('admin543')

    await page.locator("//button[@type='submit']").click()

    // verify method1

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})


test('Verify Login with Invalid Username and Valid Password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill('Admines')

    await page.locator("//input[@type='password']").fill('admin123')

    await page.locator("//button[@type='submit']").click()

    // verify method1

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})


test('Verify Login with Invalid Username and Invalid Password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("//input[@placeholder='Username']").fill('Admines')

    await page.locator("//input[@type='password']").fill('admin543')

    await page.locator("//button[@type='submit']").click()

    // verify method1

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()


})