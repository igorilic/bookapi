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
            .state('update', {
                url: '/update/:bookId',
                templateUrl: 'books/update.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'books/list.html',
                controller: 'BooksController',
                controllerAs: 'vm'
            })
            .state('detail', {
                url:'/detail',
                controller: 'BooksController',
                controllerAs: 'vm',
                views:{
                    "detail": { templateUrl: 'books/detail.html' }
                }
            });
    }

})();