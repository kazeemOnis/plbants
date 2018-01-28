var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fixtureSchema = new Schema({
	week: {
		type: Number
	},
	date: {
		type: String
	},
	home: {
		team:{
			type: String
		},
		name: {
			type: String
		},
		score: {
			type: Number
		},
		image: {
			type: String
		}
	},
	time: {
		type: String
	},
	away: {
		team: {
			type: String
		},
		name: {
			type: String
		},
		score: {
			type: Number
		},
		image: {
			type: String
		}
	}
});

var Fixture = mongoose.model('fixture',fixtureSchema);
module.exports = Fixture;