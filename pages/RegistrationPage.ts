import { Page, Locator } from "@playwright/test";


 export class RegistrationPage
{   
    page:Page;
    firstName:Locator;
    lastName:Locator;
    email:Locator;
    phoneNumber:Locator;
    occupation:Locator;
    maleGender:Locator;
    femaleGender:Locator;
    password:Locator;
    cnfPassword:Locator;
    chekBoxAbove18:Locator;
    registerBtn:Locator;
    successfulAcc:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.firstName=page.locator('#firstName');
        this.lastName= page.locator('#lastName');
        this.email=page.locator('#userEmail');
        this.phoneNumber=page.locator('#userMobile')
        this.occupation=page.locator('.custom-select')
        this.maleGender=page.getByRole("radio", {name: 'Male', exact: true});
        this.femaleGender= page.getByLabel('Female')
        this.password=page.locator('#userPassword')
        this.cnfPassword=page.locator('#confirmPassword')
        this.chekBoxAbove18=page.getByRole('checkbox');
        this.registerBtn=page.locator('#login');
        this.successfulAcc=page.getByRole('heading', { name: 'Account Created Successfully' });

    }


    async fillRegisterDetails(firstName: string, lastName: string, email: string,
        phone: string, label:string, password: string, cnfPassword:string)
    {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.phoneNumber.fill(phone)
        await this.occupation.selectOption({label: label})
        await this.maleGender.check();
        
        //this.femaleGender
        await this.password.fill(password)
        await this.cnfPassword.fill(cnfPassword)
        await this.chekBoxAbove18.check();
        await this.registerBtn.click();
    }
}