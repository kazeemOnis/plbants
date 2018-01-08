/*jshint esversion: 6 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/api');
var path = require('path');

////connect to mongodb
mongoose.connect('mongodb://kazonis:kazman3@ds159696.mlab.com:59696/team');
//mongoose.connect('mongodb://localhost/teams');

//Handles mongoose callback 
mongoose.Promise = global.Promise;

// initialize express static middleware
app.use(express.static('public'));
app.use('/teams',express.static('public'));
app.use('/players',express.static('public'));

// initialize body parser middleware 
app.use(bodyParser.json());

//intialize routes to api
app.use('/api',routes);
app.use('/teams/api',routes);
app.use('/players/api',routes);

// middleware for error handling 
app.use(function(err,req,res,next){
	console.log(err._message);
	res.status(402).send({
		error: err._message
	});
});

//port no to connect to server
var portNo = 3000;

//link to the team html page
app.get('/teams/:name',(req,res)=>{
	res.sendFile(path.join(__dirname + '/public/team.html'));
});

app.get('/players/:name',(req,res)=>{
	res.sendFile(path.join(__dirname + '/public/player.html'));
});


//listen to portNo and connect to the server
app.listen(portNo,()=>{
	console.log("Server running on " + portNo);
});