//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	var team = location.pathname.split('/')[2];
	console.log(team);
	$.ajax({
		type: 'GET',
		url: 'api/teams/' + team,
		success: function(team){
			function teamDescription(src,name,image,trophies,site,facebook,
				twitter,youtube,formation,color){
				//Recieves and sends club logo
					var img = $("#team-badge");
					var src = src; 
					img.attr('src',src);
				//Recieves and sends stadium name 
					var stadium_name = name;
					$("#stadium").append(stadium_name);
				//Recieves and sends stadium image 
					var pitch = $("#pitch");
					var pitchsrc = image;
					var id = "teampitch";
					pitch.append($("<img>").attr('id',id));
					$("#teampitch").attr('src',pitchsrc);
					$("#teampitch").css('margin','auto').css('margin-top','10px');
				//Recieves and sends amount of trophies won
					var trophies = trophies;
					$("#trophies").append(trophies);
				//Recieves and sends club website
					var site = site;
					var website = $("#website");
					var sitetag = $("<a></a>");
					website.append(sitetag);
					sitetag.attr('href',site).append(site);
					sitetag.css('color','white');
					sitetag.attr('target','_blank');
					console.log(sitetag);
				//Recieves and sends club facebook
					var facebook = facebook;
					$('#club-facebook').attr('href',facebook);
				//Recieves and sends club twitter
					var twitter = twitter;
					$('#club-twitter').attr('href',twitter);
				//Recieves and sends club youtube
					var youtube = youtube;
					$('#club-youtube').attr('href',youtube);
				//Recieves and sends background colour for club page
					var color = color;
					$("#info").css('background',color);
					// $('.words').css('mix-blend-mode','difference');
					if(color == '#f5f5f5'){
						$('.words').css('filter','invert(1)')
					};
					if(color == '#fe0'){
						$('.words').css('filter','invert(1)');
					};
					console.log(color);
				//Recieves and sends club formation
					var formation = formation
					$('#formation').append($('<img>').attr('src',formation).css('width','100%'));

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
				teamDescription(team.image,team.stadium.name,
					team.stadium.image,team.trophies,team.links.website,
					team.links.facebook,team.links.twitter,team.links.youtube,
					team.formation,team.color);
				teamBackground(team.name,team.nickname,team.description);
				console.log(team);
		}
	});

	//use ajax to retrieve all the players in the daatabse/api
	$.ajax({
		type: 'GET',
		url: 'api/players',
		success: function(player){
			// all the players retrieved are stored in the array
			console.log(player);
		}
	});

});
