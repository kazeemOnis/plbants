$('li').on('click', function(){
	var teams = ["Arsenal", "Bournemouth", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leicester", "Liverpool", "Manchester City", "Mancehster Utd",
		 		 "Huddersfield", "Newcastle", "Southhampton", "Stock City", "Swansea", "Tottenham", "Watford", "West Brom", "West Ham" ]
	var val = $(this).val();
	var team = teams[val].replace(/\ /g,'_');
	// var url = "/team/" + team;
	var url = "/team.html";
			
	$.ajax({
		type: 'GET',
		// url: 'api/teams/?teamname=' + team,
		url: 'team.html',
		success: function(team){
			console.log(team);
			console.log(val);
			window.location.href = url
		}
	});
});

	function Club(){
		this.id = Number;
		this.name = String;
		this.nickname = String;
		this.history = String;
		this.position = Number;
		this.trophies = Number;
		this.image = String;
		this.site = String;
		this.background = String;
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
	}

	var arsenal = new Club();
	arsenal.id = 01; arsenal.name ="Arsenal FC"; arsenal.nickname ="Gunners"; arsenal.history ="Arsenal was founded in bla bla bla";
	arsenal.stadium.name = "Emirates Stadium"; arsenal.stadium.capacity = 60000; arsenal.stadium.image = "img/background/field.jpeg";
	arsenal.position = 7; arsenal.manager.name = "Arsené Wenger"; arsenal.manager.age = 66; arsenal.manager.image = 'img/managers/wenger.png';
	arsenal.image ="/img/logos/arsenal.png"; arsenal.site = "https://www.arsenal.com";
	arsenal.trophies = 4; arsenal.background = "red";

	function teamDescription(src,name,image,trophie,site,background){
		//Recieve and sends club logo
		var img = $("#team-badge");
		var src = src; 
		img.attr('src',src);
		//Recieves and sends stadium name 
		var stadium_name = name;
		$("#stadium").append(stadium_name);
		//Recives and sends stadium image 
		var pitch = $("#pitch");
		var pitchsrc = image;
		var id = "teampitch";
		pitch.append($("<img>").attr('id',id));
		$("#teampitch").attr('src',pitchsrc);
		$("#teampitch").css('margin','auto').css('margin-top','10px');
		//Recieves and sends amount of trophies won
		var trophie = trophie;
		$("#trophies").append(trophie);
		//Recives and sends club website
		var site = site;
		var website = $("#website");
		var sitetag = $("<a></a>");
		website.append(sitetag);
		sitetag.attr('href',site).append(site);
		sitetag.css('color','white');
		//Recives and sends background colour for club page
		var background = background;
		$("#info").css('background',background);
	}

	function teamBackground(name,nickname,description){
		var name = name;
		var nickname = nickname;
		var description = description;
		$("#club-name").append(name);
		$("#club-nickname").append(nickname);
		$("#club-description").append(description);
	}

	$(document).ready(function(){
		teamDescription(arsenal.image,arsenal.stadium.name,arsenal.stadium.image,arsenal.trophies,arsenal.site,arsenal.background);
		teamBackground(arsenal.name,arsenal.nickname,arsenal.history);
	});


