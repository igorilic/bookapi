

var bookController = function(Book) {
    var controller = {
        post: post,
        get: get
    };

    return controller;

    /////////////
    function post(req, res) {
        var book = new Book(req.body);

        book.save(function(err) {
            if (err) {
                res.status(401).send(err);
            } else {
                res.json(book);
            }
        });

        //res.status(201).send(book);
    }

    function get(req, res) {
        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, function(err, books) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        });
    }



};

module.exports = bookController;