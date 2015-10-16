(function() {
'use strict';

    angular
        .module('app.books')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['$resource', '$stateParams', '$location', 'BookService'];
    function BooksController($resource, $stateParams, $location, BookService) {
        var vm = this;
        vm.books = BookService.query();
        vm.crud = {
            createBook: createBook,
            books: books,
            findBook: findBook,
            updateBook: updateBook,
            deleteBook: deleteBook
        };



        activate();

        ////////////////

        function activate() {
        };

        // CREATE
        function createBook() {
            // vm.book = new BookService();
            // vm.book = {
            //     title: vm.title,
            //     genre: vm.genre,
            //     author: vm.author
            // }
            var book = new BookService({
                title: vm.title,
                genre: vm.genre,
                author: vm.author
            });

            book.$save(function(response) {
                $location.path('books/' + response._id);
                vm.title='';
                vm.genre='';
                vm.author='';
            }, function(err) {
                vm.error = err.data.message;
            });
        }
        // READ
        function books() {
            return BookService.query();
        }
        // READ ONE
        function findBook() {
            return BookService.get({id:$stateParams.id})
        }
        // UPDATE
        function updateBook() {
            vm.book.$update(function() {
                $location.path('books/' + vm.book._id);
            }, function(err) {
                vm.error = err.data.message;
            });
        }
        // DELETE
        function deleteBook(book) {
            if (book) {
                book.$delete();
                return BookService.query();
            }

        }
    };
})();