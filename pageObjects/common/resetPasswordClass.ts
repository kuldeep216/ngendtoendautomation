import{browser, element, by, protractor} from 'protractor';
import { LoginClass } from '../loginClass';
import { Locate } from '../GrabIt/locate';
import { AccountDetails } from '../accountDetails';
export class ResetPasswordTest {
    
  

    validate: boolean;

    validateReset(){

                let locate = new Locate();
                let logProp = new LoginClass();
                 let account = new AccountDetails();
                locate.resetPassword.click();
                locate.resetEmailBox.sendKeys(account.kdEmail);
                browser.actions().mouseMove(locate.sendClick).click().perform();
                logProp.emailSentConfirmation.getText().then((confirmText)=> {
                console.log(confirmText);
                expect(confirmText).toBe("We have sent the password reset link to "+account.kdEmail+" Click on the link to change your password");
                this.validate = true;
                })
                browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            
           
    }
}
    