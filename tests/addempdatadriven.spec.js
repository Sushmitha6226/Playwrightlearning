import { test, expect } from '@playwright/test';

const Addemployees = {
    emp1: {
        firstname: "Sushmitha",
        lastname: "M"
    },
    emp2: {
        firstname: "Santhosh",
        lastname: "M"
    },
    emp3: {
        firstname: "Gangothri",
        lastname: "R"
    }
    
};


 for (let Addemp in Addemployees) {

                               
    test(`Verify Add employee - ${Addemp} `, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.locator("//a[normalize-space(text())='Add Employee']").click()
        await page.getByPlaceholder('First Name').fill(Addemployees[Addemp].firstname);
        await page.getByPlaceholder('Last Name').fill(Addemployees[Addemp].lastname);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
        await page.locator("//li[contains(.,'Employee List')]").click()


    });

}