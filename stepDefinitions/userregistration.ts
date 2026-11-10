import {Given, When, Then} from '@cucumber/cucumber'
import {LoginPage} from '../pages/LoginPage'
import { chromium, expect  } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();



Given('I navigate to the url', async function () {
    
    
    this.loginpage=new LoginPage(this.page);
    await this.loginpage.navigatetoURL(process.env.PORTAL_URL);


});

When('I clicks on the register button', async function () {
 

 await this.loginpage.clickRegisterBtn();

});

Then('register form should be displayed', async function () {
  
    await expect(this.loginpage.registerBtn).toBeVisible();
  

});