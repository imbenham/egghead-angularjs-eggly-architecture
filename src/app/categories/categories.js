angular.module('categories', [
    'eggly.models.categories', 'categories.suggest'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    //target the ui-view named 'categories' in ROOT state (eggly)
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    },
                    //target the ui-view named 'bookmarks' in ROOT state (eggly)
                    //to show all bookmarks for all categories
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    },

                }
            })
        ;
    })
    .controller('CategoriesListCtrl', function CategoriesListCtrl(CategoriesModel) {
        var categoriesListCtrl = this;

        CategoriesModel.getCategories()
            .then(function (result) {
                categoriesListCtrl.categories = result;
            });
    
        categoriesListCtrl.suggestedCategories = CategoriesModel.getSuggestedCategories();
           /* .then(function(result) {
                categoriesListCtrl.suggestedCategories = result;
            });*/
        
        categoriesListCtrl.acceptNewCategory = function(newCat) {
            var index = categoriesListCtrl.suggestedCategories.indexOf(newCat);
            categoriesListCtrl.suggestedCategories.splice(index, 1);
            
            var aNewCat = {name: newCat};
            categoriesListCtrl.categories.push(aNewCat);
            console.log(categoriesListCtrl.categories);
        };
    })
;
