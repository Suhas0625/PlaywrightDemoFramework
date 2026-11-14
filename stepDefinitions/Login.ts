import { Given, When, Then, context } from "@cucumber/cucumber";
import {LoginPage} from '../pages/LoginPage'
import {HomePage} from '../pages/homePage'
import { expect } from "@playwright/test";


When('I enter valid username {string} and valid password {string}', async function (email,password) {
  
    this.loginpage=new LoginPage(this.page);

    await this.loginpage.enterEmail(email);
    await this.loginpage.enterPassword(password);


});

When('clicks on the login button', async function () {

    await this.loginpage.clickLogin();
});

Then('I should be logged in to the portal successfully', async function () {
    
    const homepage= new HomePage(this.page)

    await expect(homepage.signOutBtn).toBeVisible();

    


});