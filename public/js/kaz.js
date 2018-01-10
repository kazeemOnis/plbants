//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	var team = location.pathname.split('/')[2];
	$.ajax({
		type: 'GET',
		url: 'api/teams/' + team,
		success: function(team){
			function teamDescription(src,name,image,trophies,site,facebook,
				twitter,youtube,instagram,formation,color){
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
				//Recieves and sends amount of trophies won
					var trophies = trophies;
					$("#trophies").append(trophies);
				//Recieves and sends club website
					var site = site
					var sitename = site.split('.')[1] + '.com';
					var website = $("#website");
					var sitetag = $("<a></a>");
					website.append(sitetag);
					sitetag.attr('href','https://'+site).append(sitename);
					sitetag.css('color','white');
					sitetag.attr('target','_blank');
				//Recieves and sends club facebook
					var facebook = facebook;
					$('#club-facebook').attr('href',facebook).attr('target','_blank');
				//Recieves and sends club twitter
					var twitter = twitter;
					$('#club-twitter').attr('href',twitter).attr('target','_blank');
				//Recieves and sends club youtube
					var youtube = youtube;
					$('#club-youtube').attr('href',youtube).attr('target','_blank');
				//Recieves and sends club instagram
					var instagram = instagram;
					$('#club-instagram').attr('href',instagram).attr('target','_blank');
				//Recieves and sends background colour for club page
					var color = color;
					$(".jumbotron").css('background',color);
					// $('.words').css('mix-blend-mode','difference');
					if(color == '#f5f5f5'){
						$('.words').css('filter','invert(1)')
					};
					if(color == '#fe0'){
						$('.words').css('filter','invert(1)');
					};
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
			function teamStats(avPos,conceded,played,wins,loss,
				draws,goals,points,position,redCard,yellowCard){
				var avPos = avPos;
				var conceded = conceded;
				var played = played;
				var wins = wins;
				var loss = loss;
				var draws = draws;
				var goals = goals;
				var points = points;
				var position = position;
				var redCard = redCard;
				var yellowCard = yellowCard;
				var image = "/img/icons/shooto.png";
				var winImage = "/img/icons/wins.png";
				var lossImage = "/img/icons/loss.png";
				var yellowImage = "/img/icons/yellow.png"
				var redImage = "/img/icons/red.png"
				var img1 = $('<img>').attr('src',image).attr('class','shootit');
				var img2 = $('<img>').attr('src',image).attr('class','shootit');
				var winImg = $('<img>').attr('src',winImage).attr('class','shootit');
				var img4 = $('<img>').attr('src',image).attr('class','shootit');
				var lossImg = $('<img>').attr('src',lossImage).attr('class','shootit');
				var img6 = $('<img>').attr('src',image).attr('class','shootit');
				var img7 = $('<img>').attr('src',image).attr('class','shootit');
				var img8 = $('<img>').attr('src',image).attr('class','shootit');
				var redImg = $('<img>').attr('src',redImage).attr('class','shootit');
				var yellowImg = $('<img>').attr('src',yellowImage).attr('class','shootit');
				var span = $('<span></span>');
				$("#stats").append(span.append(img8).append("avPos " + avPos));
				$($("#stats span:last-child").append(' ')).after(span.append(img1).append("Goals Against: " + conceded));
				$($("#stats span:last-child").append(' ')).after(span.append(img2).append("Matches Played: " + played));
				$($("#stats span:last-child").append(' ')).after(span.append(winImg).append("Matches won: " + wins));
				$($("#stats span:last-child").append(' ')).after(span.append(img4).append("Matches drawn: " + draws));
				$($("#stats span:last-child").append('<br>')).after(span.append(lossImg).append("Matches lost: " + loss));
				$($("#stats span:last-child").append(' ')).after(span.append(img6).append("Goals for: " + goals));
				$($("#stats span:last-child").append(' ')).after(span.append(img7).append("Season points: " + points));
				$($("#stats span:last-child").append(' ')).after(span.append(redImg).append("red Cards: " + redCard));
				$($("#stats span:last-child").append(' ')).after(span.append(yellowImg).append("yellow Cards: " + yellowCard));
			}
			function fixtures(away,away_image,home,home_image,date,time){
				var away = away;
				var aimage = away_image;
				console.log(aimage);
				var aimg = $('<img>').attr('src',aimage).css('height','40px').css('padding','5px');
				var home = home;
				var himage = home_image;
				var himg = $('<img>').attr('src',himage).css('height','40px').css('padding','5px');
				var date = date;
				var time = time;
				var cardblock = $('<span></span>').attr('class','card-block').css('color','black').css('border-top','2px ridge');
				$('#fixtures').append($(cardblock).append(date).append("<br>").append(himg).append(' '+time+' ').append(aimg));
			}
			console.log(team);
			//all the teams retrieved are stored in the array 
				teamDescription(team.image,team.stadium.name,
					team.stadium.image,team.trophies,team.links.website,
					team.links.facebook,team.links.twitter,team.links.youtube,
					team.links.instagram,team.formation,team.color);
				teamBackground(team.name,team.nickname,team.description);
				teamStats(team.stats.avgPos,team.stats.conceded,team.stats.played,
					team.stats.wins,team.stats.loss,team.stats.draws,team.stats.goals,
                	team.stats.points,team.stats.position,team.stats.redCard,team.stats.yellowCard);
				for(var i=0; i<5; i++){
					fixtures(team.fixtures[i].away.name,team.fixtures[i].away.image,
	            		team.fixtures[i].home.name,team.fixtures[i].home.image,
	            		team.fixtures[i].date,team.fixtures[i].time);
				}
		}
	});
	// console.log($('.jumbotron').height());
	// console.log($('#team-head').height());
	// console.log($('#pitch').height());
	// console.log($('.container').css());
	// console.log($('#row-header').height());
	//use ajax to retrieve all the players in the daatabse/api
	$.ajax({
		type: 'GET',
		url: 'api/players/' + team,
		success: function(player){
			function exists(url, cb){
			    $.ajax({
			        url:      url,
			        dataType: 'text',
			        type:     'GET',
			        complete:  function(xhr){
			            if(typeof cb === 'function')
			               cb.apply(this, [xhr.status]);
			        }
			    });
			}
			function teamPlayers(image){
				var image = image;
				var li = $('<li></li>');
				var img = $('<img>');
				var img2 = $('<img>')
				$('#players').append(li);
				li.append(img);
				exists(image, function(status){
				    if(status === 200){
						img.attr('src',image).attr('id','player-image');
				    }
				    else if(status === 404){
			    		img.attr('src','/img/players/photo-missing.png');    
				    }
				});
				img.css('width','90px').css('height','110px');
			}
			for( var i in player){
				teamPlayers(player[i].image);
				// console.log(player[i]);
			}
		}
	});

});
