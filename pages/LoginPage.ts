import {Locator, Page} from '@playwright/test'
import dotenv from 'dotenv' //import dotenv package
dotenv.config(); //Load the env variables from the .env file


export class LoginPage
{
    page:Page;
    LoginEmail:Locator;
    LoginPassword:Locator;
    Loginbtn:Locator;
    registerBtn:Locator;

    constructor(page:Page)
    {
        this.page= page;
        this.LoginEmail= page.locator('#userEmail');
        this.LoginPassword= page.locator('#userPassword');
        this.Loginbtn= page.locator('#login');
        this.registerBtn=page.getByRole('link', { name: 'Register' })
    }


    async navigatetoURL(url:string)
    {
        await this.page.goto(url);
    }

    async clickRegisterBtn()
    {   
        await this.registerBtn.click();

    }


    async enterEmail(email:string)
    {
        await this.LoginEmail.fill(email)
    
    }

    async enterPassword(password:string)
    {
        await this.LoginPassword.fill(password)
    }

    async clickLogin()
    {
        await this.Loginbtn.click();
    }

}