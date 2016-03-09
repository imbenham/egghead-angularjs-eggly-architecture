var CategoriesPage = require('./CategoriesPage');

describe("hello-protractor", function(){
    
    var page = new CategoriesPage();
    
    beforeEach(function() {
        page.get();
    });
    
    afterEach(function() {
        browser.manage().logs().get('browser').then(function(browserLog){
            expect(browserLog.length).toEqual(0);
            if (browserLog.length){
                console.error('log: ' + JSON.stringify(browserLog));
            }
        });
    });
    
    describe("button titled correctly", function() {
        
        it("should display the correct title", function(){
            expect(page.getButtonText()).toEqual('+');
        });
    });
    
    describe("suggest input and submit functioning properly", function(){
        
    
            it("should be able to add and accept suggested category", function() {
            
                page.countCategories().then(function(result1){
                    page.button.click();
           
                    page.submitSuggestion('reading');
        
                    page.countCategories().then(function(result2){
                        expect(result2).toEqual(result1);
                        var last = page.getLastSuggestedCategory()
                    
                        expect(last.getText()).toEqual('reading');
                   
                        last.click();
                    
                        page.countCategories().then(function(result3){
                            expect(result3).toEqual(result2 + 1);
                        });
                    });
                });
            });
        });
    
    describe("nav size", function(){
        it("should be the length of the viewport", function() { 
            page.getWindowSize().then(function(windowDims){
                page.getNavSize().then(function(navDims){
                    expect(navDims.height+400).toEqual(windowDims.height);
                });
            });
        });
    });
});

