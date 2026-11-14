
import {test , expect, chromium} from "@playwright/test"

/*
test("Login with Cred", async ()=>{

let browser = await chromium.launch({headless:false})
let context = await browser.newContext();
let page = await context.newPage();

await page.goto("https://speedwaytech.co.in/storageStatePractice.html");
await page.getByPlaceholder("Enter Username").fill("admin");
await page.getByPlaceholder("Enter Password").fill("admin123");
await page.getByRole("button",{name:'Login'}).click();

await context.storageState({path:"./Test-Data/login_data.json"})



await page.waitForTimeout(5000)
})
*/
test ("login with storageState",async ()=>{

let browser = await chromium.launch({headless:false})
let context = await browser.newContext({storageState:"./Test-Data/login_data.json"});
let page = await context.newPage();

await page.goto("https://speedwaytech.co.in/storageStatePractice.html");

await page.waitForTimeout(5000)
})