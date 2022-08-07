# Web App Testing with WebdriverIO



# What is webdriverio?
* Open Source testing framework built to automation modern web and mobile applications
* Webdriver Protocol (cross-browser testing)
* Chrome Dev Tools Prtocol (chromium-based automation) using Puppeteer
* Appium for Mobile Automation
* Feature Reach
- Frameworks: Mocha, Jasmine and Cucumber

# Advantages
* Easy to get started with for beginners
* Readable syntax
* Pre-built services support
* Integration with CI tools
. Using Cloud Services
. Autocompletion<br>
. Docker<br>
. Github Actions<br>
. Jenkins<br>
. Bamboo<br>

# Concise Test Writing
* Instead of:
driver.findElement(By.id('submit')).click();
* You write:
$('#submit).click();

# Setup & Installing
* install node v14.15.3  (version control: node -v)
* install npm 6.14.9 or higher (version control: npm -v)
* npm init -y
* npm install @wdio/cli
* npx wdio config<br>
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
* code . (open project)

![x](https://user-images.githubusercontent.com/75911392/183310521-16a74559-ca6c-4d84-84d9-1ccb689faf09.PNG)

![x2](https://user-images.githubusercontent.com/75911392/183310524-7dff26b9-7c51-4f55-be98-c081a21d2553.PNG)

# Test Case

* Uygulama açılır
* Anasayfada Konum alanına tıklanır.
* İl, ilçe ve mahalle seçilir ve kaydet butonuna Kklanır.
* Konumunuz Kaydedildi popup’ı kontrol edilir.
* Tab bar üzerinden kategoriler tabına tıklanır.
* Herhangi bir kategori seçilip listeleme sayfasına yönlenilir.
* Listeleme sayfasında Yarın Kapında alanında gelen il bilgisi ile anasayfada seçilen il bilgisinin aynı olduğu kontrol edilir.


