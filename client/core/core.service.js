(function() {
'use strict';

    angular
        .module('app.core')
        .factory('BookService', ['$resource', function($resource) {
            return $resource('/api/books/:bookId', {bookId: '@_id'} , {
                update: {
                    method: 'PUT'
                }
            }, {
                stripTrailingSlashes: false
            });
        }]);

    // BookService.$inject = ['$resource'];
    // function BookService($resource) {
    //     var service = {
    //         api: api
    //     };

    //     return service;

    //     ////////////////
    //     function api() {
    //         return $resource('/api/books/:bookId',
    //         { id: '@_id'}, {
    //             update: {
    //                 method: 'PUT'
    //             }
    //         });
    //     }
    // }
})();