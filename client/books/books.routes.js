(function() {
    'use strict';

    angular
        .module('app.books')
        .config(routes);
    
    routes.$inject = ['$stateProvider']
    function routes($stateProvider) {
        $stateProvider
            .state('books', {
                url: '/books',
                templateUrl: 'books/books.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })
    }
    
})();