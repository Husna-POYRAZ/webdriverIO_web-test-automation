describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");
        const elLoading = $("#loading");

        browser.url('/dynamic_loading/1');
        btnStart.click();

        //browser.pause(15000);

       //textFinish.waitForDisplayed({ timeout: 15000 });

       elLoading.waitForDisplayed();
       
       elLoading.waitForDisplayed({reverse: true});

        expect(textFinish.getText()).toEqual("Hello World!");
    });
});

// npx wdio --spec ./test\specs\dynamic.loading.js