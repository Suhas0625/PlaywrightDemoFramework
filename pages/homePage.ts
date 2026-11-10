import {Locator, Page} from '@playwright/test'

export class HomePage
{

    page:Page;
    signOutBtn:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.signOutBtn=page.getByRole("button", {name:'Sign Out'});
    }
}