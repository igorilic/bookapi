var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
	.get(function(req, res) {
		var responseJson = {
			hello: 'my API'
		};
		res.json(responseJson);
	});

app.use('/api', bookRouter);



app.get('/', function(req, res) {
	res.send('Welcome!');
});

app.listen(port, function() {
	console.log('App is up and running on PORT: ' + port);
});