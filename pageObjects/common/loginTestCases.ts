import {  Locate } from '../GrabIt/locate';
import { AccountDetails } from '../accountDetails';
import { LoginClass } from '../loginClass';
import { browser } from 'protractor';
import { Common } from './commonFunctions';


export class LoginTestCases
{

    

    async validateWrong()
    {   let locate = new Locate();
        let account = new AccountDetails();
        let logProp = new LoginClass();
        locate.emailEditBox.sendKeys("account.kdEmail");
        locate.passwordEditBox.sendKeys("iDontKnow!");
        locate.click.click().then(()=> {
        locate.passwordEditBox.clear();
        locate.emailEditBox.clear();
        });
        logProp.loginerror.getText().then(function(expected){
        expect(expected).toBe(logProp.actualError);
    })

    }

    async validateCorrect()
    {
        let locate = new Locate();
        let account = new AccountDetails();
        
        await locate.emailEditBox.sendKeys(account.kdEmail);
        await locate.passwordEditBox.sendKeys(account.kdPass);
        browser.waitForAngularEnabled(false)
	    await locate.click.click().then(()=>{
        browser.sleep(5000);
        
        })
        
    }

    async loginWithStudent()
    {




    }


}