function CategoriesPage() {
    this.button = element(by.id('suggest-button'));
    this.nav = $('.nav.nav-sidebar');
    this.suggestCategoryInput = $('.suggest-content.suggest-input');
    this.submitSuggestionButton = element(by.id('submit-button'));
    this.suggestedCategories = element.all(by.repeater('suggestedCategory in categoriesListCtrl.suggestedCategories'));
    this.categories = element.all(by.repeater('category in categoriesListCtrl.categories'));
    this.lastSuggestedCategory = element.all(by.repeater('suggestedCategory in categoriesListCtrl.suggestedCategories')).last();
    
    this.get = function() {
        browser.get('/src/#');
    };
    
    this.clickButton = function() {
        this.button.click();
    };
    
    this.getButtonText = function() {
        return this.button.getText();
    };
    
    this.getNavSize = function() {
        return this.nav.getSize();
    };
    
    this.submitSuggestion = function(suggestion) {
        this.suggestCategoryInput.sendKeys(suggestion);
        this.submitSuggestionButton.click();
    };
    
    this.countCategories = function() {
        return this.categories.count();
    };
    
    this.countSuggestedCategories = function() {
        return this.suggestedCategories.count();
    };
    
    this.getCategories = function() {
        return this.categories;
    };
    
    this.getSuggestedCategories = function() {
        return this.suggestedCategories;
    };
    
    this.getLastSuggestedCategory = function() {
        return this.lastSuggestedCategory;
    };
    
    this.getWindowSize = function() {
        return browser.driver.manage().window().getSize();
    }
};

module.exports = CategoriesPage;  // this is provided by node, is a way to use this file in other files