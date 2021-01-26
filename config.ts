import{Config} from 'protractor';


export let config:Config = {

    directConnect: true,
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    capabilities: {
      browserName: 'chrome'
    },



  
    specs: ['../features/demo.feature'],

    cucumberOpts: {
        // require step definitions
        require: [
            './stepdefinations/*.js', // accepts a glob
        ]
      }
  
    
  };