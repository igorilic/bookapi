var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');

var Book = require('./models/bookModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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