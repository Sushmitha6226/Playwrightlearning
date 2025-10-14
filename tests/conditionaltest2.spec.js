import { test, expect } from '@playwright/test';

test('Open Website Based on Browser', async ({ page, browserName }) => {

    if(browserName == "chromium"){
   
    await page.goto("https://www.flipkart.com/")
       
    }
    else if(browserName =="firefox"){

        await page.goto("https://www.amazon.in/")

    }


})