import {Before, After, BeforeAll, AfterStep, Status, setDefaultTimeout} from '@cucumber/cucumber'
import { chromium } from "@playwright/test";
import path from 'node:path';


setDefaultTimeout(60*1000)// 60 sec

Before(async function() //before exery scneario
{
    this.browser= await chromium.launch({headless: false});
    this.context= await this.browser.newContext();
    this.page= await this.context.newPage();

})


After(async function()
{
    await this.browser.close();
})


AfterStep(async function({result})
{   
    if(result.status===Status.FAILED)
    {   
         const ss= await this.page.screenshot({path: 'Screenshots.png'});

         this.attach(ss, 'imeage.png')

    }


})


