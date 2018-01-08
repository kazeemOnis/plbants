getArsenal(){
	this.name = arsenal;
}

getArsenal(){
	this.name = arsenal;
}
getManUtd(){
	this.name = arsenal;
}
getChelsea(){
	this.name = arsenal;
}

function Team(){
	this.id = Number;
	this.name = String;
	this.nickname = String;
	this.history = String;
	this.position = Number;
	this.stadium = {
		name: String,
		image: String,
		capacity: Number
	};
	this.manager = {
		name: String,
		age: Number,
		image: String
	};
	players = [Player];
	this.stats = {
		avgPos: Number,
		goals: Number,
		conceided: Number,
		wins: Number,
		loss: Number,
		draw: Number,
		redCard: Number,
		yellowCard: Number,

	};
}

function Player(){
	this.id = Number;
	this.number = Number;
	this.name = String;
	this.age = Number;
	this.position = String;
	this.goals = Number;
	this.assists= Number;
	this.image = String;
}

//Player data
	var ramsey = new Player();
	ramsey.id = 0; ramsey.number = 8; ramsey.assists = 5; ramsey.goals = 3; ramsey.position = "MF";
	ramsey.name = "Aaron Ramsey"; ramsey.image = "/img/players/ramsey.png"; ramsey.age = 26; 

	var niles = new Player();
	niles.id = 1; niles.number = 30; niles.assists = 0; niles.goals = 0; niles.position = "MF";
	niles.name = "Ainsley Maitland-Niles"; niles.image = "/img/players/niles.png"; niles.age = 20;

	var iwobi = new Player();
	iwobi.id = 2; iwobi.number = 17; iwobi.assists = 1; iwobi.goals = 1; iwobi.position = "MF";
	iwobi.name = "Alex Iwobi"; iwobi.image = "/img/players/iwobi.png";  iwobi.age = 21;

	var lacazette = new Player();
	lacazette.id = 3; lacazette.number = 9; lacazette.assists = 2; lacazette.goals = 8; lacazette.position = "FW";
	lacazette.name = "Alexandre Lacazette"; lacazette.image = "/img/players/lacazette.png";  lacazette.age = 26;

	var alexis = new Player();
	alexis.id = 4; alexis.number = 7; alexis.assists = 4; alexis.goals = 4; alexis.position = "MF";
	alexis.name = "Alexis Sánchez"; alexis.image = "/img/players/alexis.png";  alexis.age = 28;

	var welbeck = new Player();
	welbeck.id = 5; welbeck.number = 23; welbeck.assists = 0; welbeck.goals = 3; welbeck.position = "FW";
	welbeck.name = "Danny Welbeck"; welbeck.image = "/img/players/welbeck.png";  welbeck.age = 27;

	var ospina = new Player();
	ospina.id = 6; ospina.number = 13; ospina.assists = 0; ospina.goals = 0; ospina.position = "GK";
	ospina.name = "David Ospina"; ospina.image = "/img/players/ospina.png";  ospina.age = 29;

	var coquelin = new Player();
	coquelin.id = 7; coquelin.number = 34; coquelin.assists = 0; coquelin.goals = 0; coquelin.position = "MF";
	coquelin.name = "Francis Coquelin"; coquelin.image = "/img/players/coquelin.png";  coquelin.age = 26;

	var xhaka = new Player();
	xhaka.id = 8; xhaka.number = 29; xhaka.assists = 2; xhaka.goals = 0; xhaka.position = "MF";
	xhaka.name = "Granit Xhaka"; xhaka.image = "/img/players/xhaka.png";  xhaka.age = 25;

	var bellerin = new Player();
	bellerin.id = 9; bellerin.number = 24; bellerin.assists = 2; bellerin.goals = 0; bellerin.position = "DF";
	bellerin.name = "Hector Bellerín"; bellerin.image = "/img/players/bellerin.png";  bellerin.age = 22;

	var wilshere = new Player();
	wilshere.id = 10; wilshere.number = 10; wilshere.assists = 1; wilshere.goals = 0; wilshere.position = "MF";
	wilshere.name = "Jack Wilshere"; wilshere.image = "/img/players/wilshere.png";  wilshere.age = 25;

	var koscielny = new Player();
	koscielny.id = 11; koscielny.number = 6; koscielny.assists = 0; koscielny.goals = 0; koscielny.position = "DF";
	koscielny.name = "Laurent Koscielny"; koscielny.image = "/img/players/koscielny.png";  koscielny.age = 32;

	var ozil = new Player();
	ozil.id = 12; ozil.number = 11; ozil.assists = 6; ozil.goals = 2; ozil.position = "MF";
	ozil.name = "Mesut Ozil"; ozil.image = "/img/players/ozil.png"; ozil.age = 29;

	var elneny = new Player();
	elneny.id = 13; elneny.number = 35; elneny.assists = 0; elneny.goals = 0; elneny.position = "MF";
	elneny.name = "Mohammed Elneny"; elneny.image = "/img/players/elneny.png";  elneny.age = 25;

	var monreal = new Player();
	monreal.id = 14; monreal.number = 18; monreal.assists = 0; monreal.goals = 2; monreal.position = "DF";
	monreal.name = "Nacho Monreal"; monreal.image = "/img/players/monreal.png";  monreal.age = 31;

	var giroud = new Player();
	giroud.id = 15; giroud.number = 12; giroud.assists = 1; giroud.goals = 3; giroud.position = "FW";
	giroud.name = "Olivier Giroud"; giroud.image = "/img/players/giroud.png";  giroud.age = 31;

	var mertesacker = new Player();
	mertesacker.id = 16; mertesacker.number = 4; mertesacker.assists = 0; mertesacker.goals = 0; mertesacker.position = "DF";
	mertesacker.name = "Per Mertesacker"; mertesacker.image = "/img/players/mertesacker.png";  mertesacker.age = 33;

	var cech = new Player();
	cech.id = 17; cech.number = 33; cech.assists = 0; cech.goals = 0; cech.position = "GK";
	cech.name = "Petr Cech"; cech.image = "/img/players/cech.png";  cech.age = 35;

	var holding = new Player();
	holding.id = 18; holding.number = 16; holding.assists = 0; holding.goals = 0; holding.position = "DF";
	holding.name = "Rob Holding"; holding.image = "/img/players/holding.png";  holding.age = 22;

	var kolasinac = new Player(); 
	kolasinac.id = 19; kolasinac.number = 31; kolasinac.assists = 2; kolasinac.goals = 1; kolasinac.position = "DF";
	kolasinac.name = "Sead Kolasinac"; kolasinac.image = "/img/players/kolasinac.png";  kolasinac.age = 24;

	var mustafi = new Player(); 
	mustafi.id = 20; mustafi.number = 20; mustafi.assists = 0; mustafi.goals = 0; mustafi.position = "DF";
	mustafi.name = "Shkodran Mustafi"; mustafi.image = "/img/players/mustafi.png";  mustafi.age = 25;

	var walcott = new Player();
	walcott.id = 21; walcott.number = 14; walcott.assists = 0; walcott.goals = 0; walcott.position = "FW";
	walcott.name = "Theo Walcott"; walcott.image = "/img/players/walcott.png";  walcott.age = 28;

//Team data
	var arsenal = new Team();
	arsenal.id = 01; arsenal.name ="Arsenal FC"; arsenal.nickname ="Gunners"; arsenal.history ="Arsenal was founded in bla bla bla";
	arsenal.stadium.name = "Emirates Stadium"; arsenal.stadium.capacity = 60000; arsenal.stadium.image = "img/stadium/emirates.png";
	arsenal.position = 7; arsenal.manager.name = "Arsené Wenger"; arsenal.manager.age = 66; arsenal.manager.image = 'img/managers/wenger.png';
	arsenal.image ="/img/teams/arsenal.png"; arsenal.stats.avgPos = 52; arsenal.stats.conceided = 19; arsenal.stats.goals = 29;
	arsenal.stats.yellowCard = 22; arsenal.stats.redCard = 0; arsenal.stats.wins = 9 ; arsenal.stats.draw = 3; arsenal.stats.loss = 5;
	arsenal.players = [ramsey,niles,iwobi,lacazette,alexis,welbeck,ospina,coquelin,
						xhaka,bellerin,wilshere,koscielny,ozil,elneny,monreal,giroud,mertesacker,
						cech,holding,kolasinac,mustafi,walcott];

console.log(arsenal);

function show_image(src, alt, spanId) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 70;
    img.height = 70;
    img.alt = alt; 
    var spanId = spanId;
    document.getElementById(spanId).appendChild(img);
    // document.body.appendChild(img); 
}

function teamPlayers(ulId, lid, src, alt) {
	var ulId = ulId;
	var li = document.createElement("li");
	li.id = lid;
	var lid = lid;
	var img = document.createElement("img");
	img.src = src;
	img.width = 70;
	img.height = 70;
	img.alt = alt;
	img.class = "teamplayerimage";
	img.style = "border-radius: 50%; padding: 5px;"
	document.getElementById(ulId).appendChild(li);
	document.getElementById(lid).appendChild(img);
}

$(document).ready(function(){
	//Team Background
		document.getElementById("stadium").innerHTML = arsenal.stadium.name;
		document.getElementById("club-name").innerHTML = arsenal.name;
		document.getElementById("club-nickname").innerHTML = arsenal.nickname;
	
	//Top performing player
	    show_image(cech.image, "Petr Cech", "topImage");
		document.getElementById("top-name").innerHTML = cech.name;
		// document.getElementById("top-rating").innerHTML = cech.rating;
		document.getElementById("top-goals").innerHTML = cech.goals + " goals";
		document.getElementById("top-assists").innerHTML = cech.assists + " assists";
	
	//Second top performing player
	    show_image(iwobi.image, "Alex Iwobi", "topImage2");
		document.getElementById("top-name2").innerHTML = iwobi.name;
		// document.getElementById("top-rating2").innerHTML = iwobi.rating;
		document.getElementById("top-goals2").innerHTML = iwobi.goals + " goals";
		document.getElementById("top-assists2").innerHTML = iwobi.assists + " assists";
	
	//Third top performing player
	    show_image(ramsey.image, "Aaron Ramsey", "topImage3");
		document.getElementById("top-name3").innerHTML = ramsey.name;
		// document.getElementById("top-rating3").innerHTML = ramsey.rating;
		document.getElementById("top-goals3").innerHTML = ramsey.goals + " goals";
		document.getElementById("top-assists3").innerHTML = ramsey.assists + " assists"; 
	
	//Team images
		teamPlayers("players", 1, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 2, iwobi.image, "Alex Iwobi");
		teamPlayers("players", 3, cech.image, "Petr Cech");
		teamPlayers("players", 4, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 5, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 6, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 7, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 8, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 9, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 10, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 11, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 12, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 13, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 14, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 15, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 16, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 17, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 18, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 19, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 20, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 21, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 22, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 23, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 24, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 25, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 26, ramsey.image, "Aaron Ramsey");
		teamPlayers("players", 27, ramsey.image, "Aaron Ramsey");
});



