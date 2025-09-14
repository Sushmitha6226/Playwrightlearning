import { test, expect } from '@playwright/test';

test('verify the add employee', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
 
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
;
  await page.getByRole('button', { name: ' Add' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');
  await page.getByText('Add Job TitleJob TitleJob').click();
  await page.getByRole('textbox').nth(1).click();
 
  await page.getByRole('textbox').nth(1).fill('QA tester');
  
  await page.getByRole('textbox', { name: 'Type description here' }).fill('tester');
 
  await page.getByText('User Management').click();
});