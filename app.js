var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	
var db = mongoose.connect('mongodb://localhost:27017/bookAPI');
// var db = mongoose.connection;
// db.on('error', function(err) {
// 	console.log(err.message);
// });
// db.once('open', function() {
// 	console.log('Mongo is connected');
// });
var Book = require('./models/bookModel');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var bookRouter = express.Router();

bookRouter.route('/Books')
	.post(function(req, res) {
		var book = new Book(req.body);
		res.send(book);
	})
	.get(function(req, res) {
		
		var query = {};
		
		if (req.query.genre) {
			query.genre  = req.query.genre;
		}
		Book.find(query, function(err, books) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(books);
			}
		});
	});
bookRouter.route('/Books/:bookId')
	.get(function(req, res) {
			
	 	Book.findById(req.params.bookId, function(err, book) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(book);
			}
		});
	});
		
		
app.use('/api', bookRouter);


var bookRouter = require('./routes/bookRoutes')(Book);

bookRouter.use(function(req, res, next) {
    console.log('Nesto se desava');
    next();
});

app.use('/api/books', bookRouter);
// app.use('/api/author', authorRouter);

app.get('/', function(req, res) {
	res.send('Welcome!');
});

app.listen(port, function() {
	console.log('App is up and running on PORT: ' + port);
});