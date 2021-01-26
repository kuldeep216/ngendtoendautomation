import { browser, by, element } from "protractor";

export class CheckBox
{
    async checkboxRandomClick()
    {
        let n=1;
        
        for (let i=0; i<14;i++)
        {
            
            await browser.sleep(4000);
            await element(by.xpath('//*[@id="page-wrapper"]/p-student/app-take-test/section/div/div[1]/div[1]/div/mcq-question/div/div[2]/ul/li['+n+']/div/div/label/span')).click();
            await browser.sleep(3000);
            if(i%4==0)
            {
                await element(by.css("div[class='save-next-btn btn p-0 ng-star-inserted']")).click();
                n=1;
            }
            else
            {
                await element(by.css("div[class='review-next-btn btn p-0']")).click();
                n++;
            }
        }
    }

    async done()
    {
        await element(by.css("div[class='finish-btn ng-star-inserted']")).getText().then(async (text)=>{
            expect(text).toBe("Finish");
            browser.sleep(2000);
    })
}
    async submitSuccess()
    {
        await element(by.css("[class='continue-btn']")).getText().then(async (text)=>{
           await expect(text).toBe("Continue");
            await browser.sleep(3000);
        })
        await element(by.css("[class='continue-btn']")).click();
        await browser.sleep(3000);
    }
        
    
}
