angular.module('categories.suggest', ['eggly.models.categories'])
.config(function($stateProvider){
    $stateProvider
    .state('eggly.categories.suggest', {
        url: 'categories/suggest',
        views: {
            'suggest@': {
                templateUrl: 'app/categories/suggest/categories-suggest.tmpl.html',
                controller: 'SuggestCategoryController as suggestCtrl'
            }
        }
    }); 
})
.controller('SuggestCategoryController', function SuggestCategoryController($scope, CategoriesModel, $state) {
    var ctrl = this;
    ctrl.suggested = '';
    
    this.submitSuggested = function(){
        console.log('submitted!');
        CategoriesModel.addSuggestedCategory(this.suggested);
        this.suggested = '';
        $state.go('eggly.categories');

    };
    
});