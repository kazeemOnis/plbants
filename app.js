/*jshint esversion: 6 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var routes = require('./routes/api');
var path = require('path');
var nodemailer = require('nodemailer');

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
app.use(bodyParser.urlencoded({
    extended: true
}));
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

app.get('/contact',(req,res)=>{
	res.sendFile(path.join(__dirname+ '/public/contact.html'));
});

app.get('/statistics',(req,res)=>{
	res.sendFile(path.join(__dirname+'/public/stats.html'));
});

app.get('/fixtures',(req,res)=>{
	res.sendFile(path.join(__dirname+'/public/fixtures.html'));
});

app.get('/results',(req,res)=>{
	res.sendFile(path.join(__dirname+'/public/results.html'));
});

app.get('/search',(req,res)=>{
	var player = req.query.player.replace(/ /g,'_');
	res.redirect('/players/'+player);
});

app.get('/teamSearch',(req,res)=>{
	var team = req.query.team.replace(/ /g,'_');
	res.redirect('/teams/'+team);
});

app.get('/clubs',(req,res)=>{
	res.sendFile(path.join(__dirname+'/public/teams.html'));
});

app.get('/club_players',(req,res)=>{
	res.sendFile(path.join(__dirname+'/public/players.html'));
});

app.post('/contact',(req,res)=>{
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'bantspl@gmail.com',
			pass: 'Banter1234'
		}
	});
	var text = "from: "+req.body.name+" feedback: " +req.body.feedback; 
	var mailOptions = {
		from: req.body.name + '&lt;' + req.body.email + '&gt;',
		to: 'bantspl@gmail.com',
		subject: 'Plbants Feedback',
		text: text
	};
	var reply = "Thank you for the feedback, we value your comments and we hope you visit the site again";
	var replyOptions = {
		from: "PL Bants"+"bantspl@gmail.com",
		to: req.body.email,
		subject: "Thanks for the feedback!!!!",
		text: reply
	};
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err){
			res.status(404);
		}
		else {
			transporter.sendMail(replyOptions,(err,res)=>{
				if(err){
					res.status(404);
				}
			});
			res.redirect('/');
		}
	});
});

app.use((req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(__dirname+'/public/404.html'));
});

//listen to portNo and connect to the server
app.listen(portNo,()=>{
	console.log("Server running on " + portNo);
});