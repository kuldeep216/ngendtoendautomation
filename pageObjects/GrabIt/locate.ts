import { by, element, ElementFinder } from "protractor";

export class Locate
{
    
    emailEditBox: ElementFinder;
    passwordEditBox: ElementFinder;
    click: ElementFinder;
    resetPassword: ElementFinder;
    resetEmailBox: ElementFinder;
    sendClick: ElementFinder;
    loginConfirm: ElementFinder;
    assessment: ElementFinder;


    constructor()
    {
        this.emailEditBox = element(by.name("email"));
        this.passwordEditBox = element(by.name("password"));
        this.click = element(by.css("button[class='btn py-0 text-white ng-star-inserted']"));
        this.resetPassword = element(by.css("a[type='button']"));
        this.resetEmailBox = element(by.css("input[formcontrolname='userEmail']"));
        this.sendClick = element(by.css("button[class='btn py-0 text-white mt-2']"));
        this.loginConfirm = element(by.css("span[class='account-options']"));
        this.assessment = element(by.linkText('Assessment'));

    }

    


}
