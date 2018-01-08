var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({
	name: {
		type: String
	},
	capacity: {
		type: Number
	},
	image: {
		type: String
	}
});

var statSchema = new Schema({
	position: {
		type: Number
	},
	played: {
		type: Number
	},
	points: {
		type: Number
	},
	goals: {
		type: Number
	},
	conceded: {
		type: Number
	},
	wins: {
		type: Number 
	},
	loss: {
		type: Number
	},
	draws: {
		type: Number
	},
	avgPos: {
		type: Number
	},
	yellowCard: {
		type: Number
	},
	redCard: {
		type: Number
	}
});

var managerSchema = new Schema({
	name: {
		type: String
	},
	age: {
		type: Number
	}
});

var linkSchema = new Schema({
	facebook: {
		type: String
	},
	twitter: {
		type: String
	},
	instagram: {
		type: String
	},
	youtube: {
		type: String
	},
	website: {
		type: String
	}
});

var teamSchema = new Schema({
	name: {
		type: String,
		required: [true, 'team name needed']
	},
	nickname: {
		type: String
	},
	image: {
		type: String
	},
	description: {
		type: String
	},
	color: {
		type: String
	},
	formation: {
		type: String
	},
	trophies: {
		type: Number
	},
	manager: managerSchema,
	stadium: stadiumSchema,
	stats: statSchema,
	links: linkSchema
});

var Team = mongoose.model('team',teamSchema);
module.exports = Team;
