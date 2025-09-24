import { test, expect } from '@playwright/test';

test('Verify Demo QA Text box fields', async ({ page }) => {

    await page.goto('https://demoqa.com/')
    await page.locator("(//div[contains(@class,'avatar mx-auto')])[1]").click()
    await page.locator("//li[contains(.,'Text Box')]").click()

    await expect(page).toHaveURL('https://demoqa.com/text-box')

    await page.locator("//input[@placeholder='Full Name']").fill("Sushmitha M")

    await page.locator('#userEmail').fill("sushmitha6226@gmail.com")

    await page.locator('#currentAddress').fill("Bangalore")

    await page.locator('#permanentAddress').fill("Mysore")

    await page.locator('#submit').click()

    // process.env.ORDERNUMBER =""


})