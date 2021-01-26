import{Config} from 'protractor';
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

export let config:Config = {


    directConnect: true,
  
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--use-fake-ui-for-media-stream'],
       }
    },
    //framework: 'jasmine',


    specs: ['TestSpecs/login.js'],
  
    jasmineNodeOpts: {
      showColors: true, 
      defaultTimeoutInterval: (60*4000),  
     

    },

    onPrepare: async function() {

      let globals = require('protractor');
      let browser = globals.browser;

      await jasmine.getEnv().addReporter (
        new Jasmine2HtmlReporter({
          savePath: 'loginTarget/screenshots'
        })
      );
   }

    

  };