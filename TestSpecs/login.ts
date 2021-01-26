import{browser, element, by, protractor} from 'protractor';
import { WebsiteAddress } from '../pageObjects/websiteAddress';
import { ResetPasswordTest} from '../pageObjects/common/resetPasswordClass';
import { LoginTestCases } from '../pageObjects/common/loginTestCases';
import { Common } from '../pageObjects/common/commonFunctions';

describe('Login Test', ()=> {

    let reset = new ResetPasswordTest();
    let loginValidate = new LoginTestCases();
    let common = new Common();
	it('open perfectice website and validate title', async()=> {
        
        common.openQAAndConfirmTitle();
        
    })
    it('wrong credentials login validation', async()=> {      
        
             loginValidate.validateWrong();
    })
        
    
    it('send reset password link to registered email', async()=> {
        
        
        await reset.validateReset();
    })

    it('login to student account with correct credentials', async()=> {
       
        await loginValidate.validateCorrect().then(async()=>{
            browser.sleep(5000);
            await browser.refresh();
            await element(by.linkText('Assessment')).getText().then(async function(text){
                await expect(text).toBe("Assessment");
        })
    
    }) 
        
    })
})

