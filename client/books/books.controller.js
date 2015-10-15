(function() {
'use strict';

    angular
        .module('app.books')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['$resource', '$stateParams', '$location', 'BookService'];
    function BooksController($resource, $stateParams, $location, BookService) {
        var vm = this;
        vm.title = 'Books';
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
            var book = new BookService({
                title: this.title,
                genre: this.genre,
                author: this.author
            });

            book.$save(function(response) {
                $location.path('books/' + response._id);
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
                $location.path('articles/' + vm.book._id);
            }, function(err) {
                vm.error = err.data.message;
            });
        }
        // DELETE
        function deleteBook(book) {
            if (book) {
                book.$delete();
            }

        }
    };
})();