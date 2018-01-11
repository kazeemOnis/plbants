//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	var team = location.pathname.split('/')[2];
	console.log(team);
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
					$("#teampitch").css('margin','auto').css('margin-top','10px');
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
					console.log(site);
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
					team.links.instagram,team.formation,team.color);
				teamBackground(team.name,team.nickname,team.description);
				// teamPlayers("/img/players/photo-missing");
				console.log(team);
		}
	});

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
          }//teamPlayers

          function topPerformers(players)
          {
            console.log("finding top performers...");
            var name="top-name", rating="top-rating";
            var goals="top-goals", assists="top-assists";
            
            var attr;
            
            players.sort(function(a,b){return b.goals-a.goals});
            
            //get top 3 players-based on goals
            for( var i=0; i<3; i++)
            {
              if(i==0)  //handle first player
              {
                attr = name;
                $('#'+attr).html(""+player[i].name);
                attr = rating;               
                $('#'+attr).html(""+player[i].appearances);
                attr = goals;
                $('#'+attr).html(""+player[i].goals);
                attr = assists;
                $('#'+attr).html(""+player[i].assists);
              }
              else if(i<3)//handle 2nd/3rd player
              {
                attr = name+i.toString();
                $('#'+attr).html(""+player[i].name);
                attr = rating+i.toString();
                $('#'+attr).html(""+player[i].appearances);
                attr = goals+i.toString();
                $('#'+attr).html(""+player[i].goals);
                attr = assists+i.toString();
                $('#'+attr).html(""+player[i].assists);
              }//else-if
            }//for
          }//topPerformers

          for( var i in player){
              teamPlayers(player[i].image);
              console.log(player[i]);
          }
          topPerformers(player);
		}//success fxn
	});

});
