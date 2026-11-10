import {Given, When, Then} from '@cucumber/cucumber'
import {RegistrationPage} from '../pages/RegistrationPage'
import {LoginPage} from '../pages/LoginPage'
import { expect } from '@playwright/test';
import fs from 'fs'

//read data from json

const jsonPath="Test-Data/registrationDetails.json"

const registrationData:any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));




Then('I should be able fill the registation deatils', async function () 
{   
    this.registrationpage= new RegistrationPage(this.page);

    await this.registrationpage.fillRegisterDetails(
        registrationData.firstname,
        registrationData.lastName,
        registrationData.email,
        registrationData.phoneNumber,
        registrationData.label,
        registrationData.password,
        registrationData.cnfPassword
    );


});

Then('Registation should be successful', async function () {

    await expect(this.registrationpage.successfulAcc).toBeVisible();
});