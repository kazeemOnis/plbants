var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name : {
		type: String
	},
	position: {
		type: String
	},
	number: {
		type: Number
	},
	age: {
		type: Number
	},
	appearances: {
		type: Number
	},
	goals: {
		type: Number
	},
	assists: {
		type: Number
	},
	cleanSheet: {
		type: Number
	},
	team: {
		type: String
	},
	image: {
		type: String
	}
});

var Player = mongoose.model('player',playerSchema);
module.exports = Player;