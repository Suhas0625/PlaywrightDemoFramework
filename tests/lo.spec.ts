

import { chromium } from "@playwright/test";

async function cstoragedate()
{

let browser = await chromium.launch({headless:false})
let context = await browser.newContext();
let page = await context.newPage();

await page.goto("https://speedwaytech.co.in/storageStatePractice.html");
await page.getByPlaceholder("Enter Username").fill("admin");
await page.getByPlaceholder("Enter Password").fill("admin123");
await page.getByRole("button",{name:'Login'}).click();

await context.storageState({path:"./Test-Data/in_data.json"})


}

cstoragedate();