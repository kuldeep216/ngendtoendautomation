import { browser, by, element } from "protractor";
import { AccountDetails } from "../accountDetails";
import { Locate } from "../GrabIt/locate";
import { LoginClass } from "../loginClass";
import { WebsiteAddress } from '../websiteAddress';

export class Common
{
   

    async openQAAndConfirmTitle()
    {
        let url = new WebsiteAddress();
        await browser.get(url.qaurl);
        await browser.driver.manage().window().maximize();
        await browser.getTitle().then(async function(title) {
        //browser.sleep(4000);
        expect(title).toBe('Perfectice');   
        })
    }


    async login()
    {
        let locate = new Locate();
        let account = new AccountDetails();
        
        await locate.emailEditBox.sendKeys(account.kdEmail);
        await locate.passwordEditBox.sendKeys(account.kdPass);
        browser.waitForAngularEnabled(false)
	    await locate.click.click().then(async ()=>{
        await browser.sleep(9000);
        await browser.refresh();
        await locate.assessment.getText().then(async function(text){
            await expect(text).toBe("Assessment");
            })
        
        })
        
    }

    assessmentConfirm()
    {
        element(by.css("h1[class='text-center text-white']")).getText().then(function(bannerText) {
    
        expect(bannerText).toBe("What do you want to Practice today?");
            
        })
            
    }   



}
