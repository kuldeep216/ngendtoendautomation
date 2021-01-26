import{browser, element, by, protractor, ElementArrayFinder} from 'protractor';
import { WebsiteAddress } from '../pageObjects/websiteAddress';
import { ResetPasswordTest} from '../pageObjects/common/resetPasswordClass';
import { LoginTestCases } from '../pageObjects/common/loginTestCases';
import { Common } from '../pageObjects/common/commonFunctions';
import { AssessTestCase } from '../pageObjects/common/assesmentTestCases';
import{ CheckBox } from '../pageObjects/common/checkbox';

describe('Login And Take Assessment', ()=> {

    let reset = new ResetPasswordTest();
    let loginValidate = new LoginTestCases();
    let common = new Common();
    let assessTestCase = new AssessTestCase();
	it('open perfectice website', async()=> {
        
        //common.openQAAndConfirmTitle();
        await browser.get("https://www.practiz.xyz");
        await browser.driver.manage().window().maximize();
        
    })

    it('login to student account with correct credentials', async()=> {
       
        common.login();
    
    })  
    
    it('Go to Assessment Home page', async()=>{

        assessTestCase.clickAssessment();
    })

    // it('Check Assessment search and print no. of search results', async()=> {
    //     let a = "kd";
    //     await element(by.css("input[placeholder='Search for Topics']")).sendKeys("Proctored").then(async ()=>{
    //         await browser.sleep(5000);

    //     })
    //     await element(by.css("div[class='heading']")).element(by.css("h3")).getText().then(async (searchResult)=>{
    //         await console.log("total number of result is: "+searchResult);
    //     })
    //     await element(by.css("input[placeholder='Search for Topics']")).clear();
    //     await element(by.css("span[class='text-white ng-star-inserted']")).click();
    //     await browser.sleep(5000); 
    //     expect(a).toBe("kd");    

    // } )

    // it('Print subjects', async()=> {
                
    //     await browser.sleep(3000);
    //     await element.all(by.css("div[class='owl-item ng-tns-c100-9 ng-trigger ng-trigger-autoHeight active ng-star-inserted']")).each(async (text)=>{
    //         await text.element(by.css("h4[class='text-center']")).getText().then(async (value)=>{
    //             await console.log(value);
    //         })
    //     })
        
    // } )

    it('Proctored Assessment', async()=>{

        await assessTestCase.searchAssessmentViewDetails();
        await element(by.css("a[class='text-center text-white px-3']")).getText().then(async (text)=>{
            expect(text).toBe("Take Assessment");
        })

    } )

    it('Validate Test  Details', async()=>{

       assessTestCase.validateAssessmentName();
       assessTestCase.validatePublisherName();
    
        })

        it('Start Assessment', async()=>{

            await element(by.css("a[class='text-center text-white px-3']")).click().then(async ()=>{
               
                await browser.sleep(5000);
                await assessTestCase.validatetakePicture();
                await assessTestCase.goToTutorial();

            })
        })

        it('Validate tutorial', async()=>{

            await assessTestCase.validateTutorial();
        })

        it('Assessemnt Start Validation', async()=>{
            await assessTestCase.startAssessment();
        })

        it('MCQ Attempts', async()=>{


            let checkAndClick = new CheckBox();
            checkAndClick.done();
            checkAndClick.checkboxRandomClick();

        })

        it('Submit test', async()=>{
        //     if(await element(by.css("div[class='ajs-content']")).isDisplayed())
        //     {

        //         await element(by.css("div[class='ajs-content']")).getText().then(async(text)=>{
        //         await expect(text).toContain("Do not exit test mode.");
        //         await browser.sleep(5000);
        //         await element(by.css("div[class='ajs-content']")).click();
        //             })
        //             await element(by.css("div[class='finish-btn ng-star-inserted']")).click();
        //             browser.sleep(3000);
        //             await element(by.css("button[class='ajs-button ajs-ok']")).click();
        //     }
        //     else
        //     {
        //         await browser.sleep(5000);
        //         await element(by.css("div[class='finish-btn ng-star-inserted']")).click();
        //         browser.sleep(3000);
        //         await element(by.css("button[class='ajs-button ajs-ok']")).click();
        //     }
        // })
        await element(by.css("div[class='finish-btn ng-star-inserted']")).click().then(async ()=>{
            let submit = new CheckBox();
            browser.sleep(3000);
            await element(by.css("button[class='ajs-button ajs-ok']")).click()
            browser.sleep(8000);
            submit.submitSuccess();

        })
    })
                   





    } )





