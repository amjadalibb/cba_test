# Cypress based UI test automation

This framework uses Cypress framework for UI test automation and REST API for API test automation

## UI Automation Framework

UI Automation Regression framework is setup to run on CBA website. It clicks on all home page dashboard tabs and verifies that the page is successfully loaded.

*Tech Stack*
* Cypress 4.2.0
* Node.js
* Mocha
* Mochawesome

*Supports*
* Chrome, Firefox 
* Viewports: mobile, tablet, desktop

### How to run


* Download the project via git
 ```
  git clone https://github.com/amjadalibb/cba_test.git
  ```
* Install the project
  * Go to directory `UI-Regression-Tests` and install all dependencies
  ```
  cd UI-Regression-Tests
  npm install
  ```
* Run the test
  * There are multiple commands to run for different browser or all
  ```
  # To open the tests in cypress window
  npm run cypress:open
  
  # To run on chrome
  npm run cypress:chrome
  
  # To run on firefox 
  npm run cypress:firefox
  
  # To run on both browsers
  npm run cypress:all
  ```
* Generates report after running the test and saves it under `mochawesome-report` directory

## API Automation Framework

This framework executes api tests of Oxford Dictionaries (https://developer.oxforddictionaries.com/documentation). 

* There are two tests added:
  * Getting origin of a word `Insurance` and test against 200, 400 and 404 status codes.
  * Getting translations of a word `Test` in to french and test against 200, 400 and 404 status codes
    * NOTE: Prototype account doesn't support translation so need to upgrade to developer account
    * NOTE: Oxford dictionaries don't support French translation (see supported languages https://developer.oxforddictionaries.com/documentation/languages)
    
### How to run

* Download the project via git
 ```
  git clone https://github.com/amjadalibb/cba_test.git
  ```
* Install the project
  * Go to directory `API-Regression-Tests` and install all dependencies
  ```
  cd API-Regression-Tests
  npm install
  ```
* Create environment variables
  * Create `.env` file under `API-Regression-Tests`
    * This file is intentionally not removed from Git to save reviewer's time
  * Add variables `APPID` and `KEY`
    * You can get the keys from API Credentials tab of the Oxford Dictionaries portal once you login
    * To be able to run translations tests successfully, API credentials must be of a developer account
* Run the test
  * There are multiple commands to run
  ```
  # To run tests for getting source
  npm run test:oxford:entries
  
  # To run tests for getting translations
  test:oxford:translations
  
  # To run all tests
  npm run test:oxford:all
  ```
* Generates report after running the test and saves it under `mochawesome-report` directory

Contributer: Amjad Ali (amjadali_bb@hotmail.com)
