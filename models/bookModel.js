var mongoose = require('mongoose'),
<<<<<<< HEAD
	Schema = mongoose.Schema;

var bookModel = new Schema({
	title: {
		type: String
	},
	author: {
		type: String
	},
	genre: {
		type: String
	},
	read: {
		type: Boolean,
		default: false
	}
=======
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {
        type: Boolean,
        default: false
    }
>>>>>>> 51482625d2267fa0083f56ea49bb60c3de3e0857
});

module.exports = mongoose.model('Book', bookModel);