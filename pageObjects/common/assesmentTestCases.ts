import { browser, by, element, protractor } from "protractor";
import { AccountDetails } from "../accountDetails";
import { Locate } from "../GrabIt/locate";
import { LoginClass } from "../loginClass";
import { WebsiteAddress } from '../websiteAddress';
import { Common } from './commonFunctions';

export class AssessTestCase
{

    confirm:boolean;

    async clickAssessment()
    {
        let common = new Common();
        let locate = new Locate();
        await locate.assessment.click().then(async()=>{
            browser.sleep(4000);
        });
        common.assessmentConfirm();
        
    }

    async printSubjects()
    {
        await browser.sleep(3000);
        await element.all(by.css("div[class='owl-item ng-tns-c100-9 ng-trigger ng-trigger-autoHeight active ng-star-inserted']")).each(async (text)=>{
            await text.element(by.css("h4[class='text-center']")).getText().then((value)=>{
                console.log(value);
            })
        })
    }

    async searchAssessmentViewDetails()
    {
        await element(by.css("input[placeholder='Search for Topics']")).sendKeys("New Automation").then(async ()=>{
        
            await browser.sleep(3000);
        })
        await element(by.css("div[class='view-detail']")).click().then(async () => {
            
            await browser.sleep(2000);
        })
    }

        async validateAssessmentName()
        {
            await element(by.css("div[class='title']")).getText().then(async(text)=>{
                await expect(text).toBe("New Automation");
            })
            
        }

        async validatePublisherName()
        {
            await element(by.css("div[class='name']")).getText().then(async(text)=>{
                await expect(text).toBe("Admin");
            })
        }

        async validatetakePicture()
        {
            await element(by.css("div[class='camera-btn mx-auto ng-star-inserted']")).click().then(async ()=>{
               
                await browser.sleep(6000);
                await element(by.css("div[class='camera-btn mx-auto ng-star-inserted']")).element(by.css("a[class='text-center text-white']")).click();
                await browser.sleep(6000);
            })
        }

        async validateRetakePicture()
        {
            await element(by.css("div[class='retake-btn']")).click();
            await browser.sleep(4000);
            await element(by.css("div[class='camera-btn mx-auto ng-star-inserted']")).element(by.css("a[class='text-center text-white']")).click();
                await browser.sleep(6000);
        }

        async goToTutorial()
        {
            await element(by.xpath('//*[@id="page-wrapper"]/p-student/app-instruction-camera/section/div/div/div/div[2]/div[2]/div/div[1]/a')).click();
            await browser.sleep(7000);
                await browser.actions().sendKeys(protractor.Key.END).perform();
                await browser.sleep(5000);
                await element(by.css("a[class='text-center text-white ng-star-inserted']")).getText().then(async (text)=>{
                    expect(text).toBe("Go to tutorial");
                    await element(by.css("a[class='text-center text-white ng-star-inserted']")).click();
                })
            }
            
        async validateTutorial()
        {
            for(let i=0; i<6; i++)
            {
                await element(by.css("div[class='run-code-btn m-0']")).click();
                await browser.sleep(3000);    
            }
            await element(by.css("div[class='run-code-btn ml-auto m-0']")).click();
            await browser.sleep(6000);
            await browser.actions().sendKeys(protractor.Key.END).perform();
            await browser.sleep(3000);
            await element(by.css("div[class='take-asses-btn mx-auto mb-0']")).getText().then(async(text)=>{
                expect(text).toBe("I am ready to start");
                browser.sleep(3000);
            })

        }

        async startAssessment()
        {
            
            await element(by.css("div[class='take-asses-btn mx-auto mb-0']")).click().then(async()=>{
                browser.sleep(8000);
            })
            await element(by.css("div[class='finish-btn ng-star-inserted']")).getText().then(async(text)=>{
            expect(text).toBe("Finish");
            })
    
        }






        



   


}