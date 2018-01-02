

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name : {
		type: String
	},
	position: {
		type: String
	},
	goals: {
		type: Number
	},
	assists: Number
});

var teamSchema = new Schema({
	name: {
		type: String,
		required: [true, 'team name needed']
	},
	nickname: {
		type: String
	},
	position: {
		type: Number
	},
	manager: String,
	stadium: String,
	players: [playerSchema]
});

var Team = mongoose.model('team',teamSchema);

module.exports = Team;