![Protractor, Jasmine and Typescript](./images/protractor-jasmine-typescript.png?raw=true "Protractor, Jasmine and Typescript")

# Protractor, Jasmine and Typescript Setup Guide
This is Test Automation framework designed using Protractor, Jasmine and TypeScript

## Framework Structure
```
├─── JSFIles                        # This folder contains JS file which are generated after compiling
├───page-objects                    # This folder contains page object, page helper and page contants
│   ├───common
│   └───pages
│       ├───common
│       └───Grabit
TypeScript files
├───target                          # This folder contains test result (includes html report and screenshots)
└───TestSpecs                       # This folder contains spec/test files
```

## To Get Started

### Pre-requisites
* Download and install Node.js:
  * [Install Node.JS]
  * [Install Visual Studio Code]


### Setup Scripts 
* Clone the repository into a folder
* Install Protractor globally: `npm install -g protractor`
* Install Protractor globally: `npm install -g typescript`
* Update necessary binaries of webdriver-manager: -->`npm install -g webdriver-manager`,
                                                  -->`npm run webdriver-update`
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to write Test
* Add new spec under TestSpecs folder
* Name the file as <testname>.ts (e.g. logintest.ts)
* Create folder under page-objects/pages as <page-name> (e.g. logintestClass.ts)
* Under page folder create constant, helper and page object file.

### How to Run Test
* Run complete Test Suite: `npm run test`

### How to Update local npm packages
* Go to Project root directory and run command: `npm webdriver-update`

