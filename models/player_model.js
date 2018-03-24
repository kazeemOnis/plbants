var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name : {
		type: String
	},
	team: {
		name: {
			type: String 
		},
		image: {
			type: String
		}
	},
	country: {
		name: {
			type: String
		},
		image: {
			type: String
		}
	},
	social: {
		facebook: {
			type: String
		},
		twitter: {
			type: String
		},
		instagram: {
			type: String
		}
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
	image: {
		type: String
	},
	stats: {
		appearances: {
			type: Number
		},
		wins: {
			type: Number
		},
		loss: {
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
		saves: {
			type: Number
		},
		conceded: {
			type: Number
		},
		tackles: {
			type: Number
		},
		tackAcc: {
			type: Number
		},
		duelsWon: {
			type: Number
		},
		duelsLost: {
			type: Number
		},
		passes: {
			type: Number
		},
		passAcc: {
			type: Number
		},
		chancesCreated: {
			type: Number
		},
		shots: {
			type: Number
		},
		shotAcc: {
			type: Number
		}

	}
});

var Player = mongoose.model('player',playerSchema);
module.exports = Player;