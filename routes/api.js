var express = require('express');
var router = express.Router();
var Team = require('../models/team_model');

/**router.get('/teams',function(req,res,next){
	Team.find({'name':req.query.teamname.replace(/\_/g,' ')}).then(function(team){
		res.send(team);
		console.log(req.query);
	}).catch(next);
});**/

router.get('/teams',function(req,res,next){
	Team.find().then(function(team){
		res.send(team);
	}).catch(next);
});

router.post('/teams',function(req,res,next){
	Team.create(req.body).then(function(team){
		res.send(team);
		console.log(req.body);
	}).catch(next);
	
});

router.put('/teams/:name',function(req,res,next){
	Team.findOneAndUpdate({'name':req.params.name.replace(/\_/g,' ')},req.body).then(function(){
		Team.findOne({'name':req.params.name.replace(/\_/g,' ')}).then(function(team){
			res.send(team);
			console.log(req.body);
			console.log(req.params.name);
		});
	}).catch(next);
});

router.delete('/teams/:name',function(req,res,next){
	Team.findOneAndRemove({'name':req.params.name.replace(/\_/g,' ')}).then(function(team){
		res.send(team);
		console.log(req.params.name);
	}).catch(next);
});

module.exports = router;