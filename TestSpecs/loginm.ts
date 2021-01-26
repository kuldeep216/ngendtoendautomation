import{browser, element, by, protractor} from 'protractor';
import { LoginClass } from '../pageObjects/loginClass';
import { Locate } from '../pageObjects/GrabIt/locate';
import { WebsiteAddress } from '../pageObjects/websiteAddress';
import { AccountDetails } from '../pageObjects/accountDetails';
import { ResetPasswordTest} from '../pageObjects/common/resetPasswordClass';
import { LoginTestCases } from '../pageObjects/common/loginTestCases';

describe('Login Test', ()=> {
    //let logProp = new LoginClass();
    let account = new AccountDetails();
    let locate = new Locate();
    let reset = new ResetPasswordTest();
    let loginValidate = new LoginTestCases();
    let url = new WebsiteAddress();

	it('open perfectice website and validate title', async()=> {
      
        await browser.get(url.qaurl);
        await browser.driver.manage().window().maximize();
        await browser.getTitle().then(function(title) {
        expect(title).toBe('Perfectice');   
        })
    })
})