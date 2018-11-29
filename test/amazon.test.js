const assert = require('assert');

describe('Amazon', () => {
    it('should be a pending test')
    describe('Login functionality', () =>{

        it('Sign in text is Ccrrect', () => {
            browser.url("/");
            browser.element("//*[@id = 'nav-link-accountList']").click();
            const signInText = browser.element('//h1').getText();
            assert.equal(signInText, 'Sign in');
        })

        it('Email lable text is correct', () =>{
            const emailLabel = browser.element("//label[@for = 'ap_email']").getText();
            browser.setValue('//*[@id="ap_email"]', "mane.poghosian@gmail.com");
            assert.equal(emailLabel, 'Email (phone for mobile accounts)');
        })

        it('Password label text is correct', ()=> {
            browser.waitForExist('//*[@id="ap_password"]', 10000)
            browser.setValue('//*[@id="ap_password"]', "Amaz0nDranic");
            const passLabel = browser.element("//label[@for = 'ap_password']").getText();
            assert.equal(passLabel, 'Password')
        }) 

        it('Amazon Logo text is present as expected ', () =>{
            browser.waitForExist(".a-button-input", 10000);
            browser.element("//*[@class = 'a-button-input']").click();
            const amazonLogoText = browser.element('//*[@class = "nav-sprite nav-logo-base"]').getText();
            console.log(amazonLogoText);
            assert.equal(amazonLogoText, 'Amazon')
        })
    })
})