(function() {
'use strict';

    angular
        .module('app.core')
        .factory('BookService', BookService);

    BookService.$inject = ['$resource'];
    function BookService($resource) {
        var service = {
            api: api
        };

        return service;

        ////////////////
        function api() {
            return $resource('/api/books/:bookId',
            { id: '@_id'}, {
                update: {
                    method: 'PUT'
                }
            });
        }
    }
})();