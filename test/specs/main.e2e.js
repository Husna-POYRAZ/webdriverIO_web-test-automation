describe('Main Page', () => {
    it('Verify list items', () => {
        browser.url('/');

        const listExamples = $$("ul li"); // findElements

        expect(listExamples).toBeElementsArrayOfSize({gte : 1}); //greater than or equals
    });
});

/** npx wdio --spec ./test\specs\main.e2e.js */