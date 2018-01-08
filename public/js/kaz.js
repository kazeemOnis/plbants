//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	var team = location.pathname.split('/')[2];
	console.log(team);
	$.ajax({
		type: 'GET',
		url: 'api/teams/' + team,
		success: function(team){	
		function teamDescription(src,name,image,trophie,site,color){
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
				var color = color;
				$("#info").css('background',color);
		}

		function teamBackground(name,nickname,description){
			var name = name;
			var nickname = nickname;
			var description = description;
			$("#club-name").append(name);
			$("#club-nickname").append(nickname);
			$("#club-description").append(description);
		}
			//all the teams retrieved are stored in the array 
			teamDescription(team.image,team.stadium.name,team.stadium.image,team.trophies,team.site,team.color);
			teamBackground(team.name,team.nickname,team.history);
			console.log(team);
		}
	});

	//use ajax to retrieve all the players in the daatabse/api
	$.ajax({
		type: 'GET',
		url: 'api/players/' + team,
		success: function(player){
			// all the players retrieved are stored in the array
			console.log(player);
		}
	});

});
