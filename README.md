# Web App Testing with WebdriverIO


# What is WebdriverIO?
* Open Source testing framework built to automation modern web and mobile applications
* Webdriver Protocol (cross-browser testing)
* Chrome Dev Tools Prtocol (chromium-based automation) using Puppeteer
* Appium for Mobile Automation
* * Feature Reach
- Frameworks: Mocha, Jasmine and Cucumber

# Advantages
* Easy to get started with for beginners
* Readable syntax
* Pre-built services support
* Integration with CI tools

# Setup & Installing
* install node v14.15.3
* install npm 6.14.9 or higher
* npm install @wdio/cli
* npx wdio config
. Select "On my local machine"<br>
. Select mocha framework<br>
. Select sync Webdriver IO commands<br>
. Select "No" for the compiler question<br>
. Where are you test specs located? - Press Enter<br>
. Select "Yes" for the to use autogenerate test files question<br>
. Select "Yes" for the to use page objects question<br>
. Select "Yes" for the use page objects located question<br>
. Select allure for reporting <br>
. Select chromedriver<br>
. Enter your base url<br>

# Test Case
* The word "Antalya" is entered in the search bar in the HOTEL tab.
* Start date selected August 1, 2022
* End date selected August 8, 2022
* 2 adults are selected in the person area
* Press the "Search" button
* The hotel that comes to the top in the results is selected and the detail page is passed.
* Select the top room on the detail page and proceed to the payment page.
* "Do You Want Transportation?" the I want option is selected in the field
* Sabiha Gökçen is written to the departure airport in the departure section.
* Sabiha Gökçen is written to the arrival airport in the return section.
* Press the "Search" button
* Check if planes are listed


