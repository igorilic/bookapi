var should = require('should'),
	request = require('supertest'),
	app = require('../app.js'),
	mongoose = require('mongoose'),
	Book = mongoose.model('Book'),
	agent = request.agent(app);
	
