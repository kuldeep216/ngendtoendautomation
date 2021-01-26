import { by, element, ElementFinder } from "protractor";

export class LoginClass
{
    
    loginerror: ElementFinder;
    actualError: string;
    emailSentConfirmation: ElementFinder;

    constructor()
    {
    
        this.loginerror = element(by.css("h3[class='label label-danger text-danger ng-star-inserted']"));
        this.actualError = "Email / phone number / password combination is incorrect. Please try again.";
        this.emailSentConfirmation = element(by.css("div[class='success-text']"));
        
        
        

    }

}