//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	var team = location.pathname.split('/')[2];
		$( "#loader" ).delay(800).fadeOut(400, function(){
        $( "#mypage" ).fadeIn(900);
    });  
		$.ajax({
		type: 'GET',
		url: 'api/teams/' + team,
		success: function(team){
			$('#teamCrumb a').append(team.name);
			function teamDescription(team){
				//Recieves and sends club logo
					var img = $("#team-badge");
					var src = team.image; 
					img.attr('src',src);
				//Recieves and sends club name
					var name = team.name;
					$("#club-name").append(name);
				//Recieves and sends club nickname
					var nickname = team.nickname;
					$("#club-nickname").append(nickname);
				//Recieves and sends stadium name 
					var stadium_name = team.stadium.name;
					$("#stadium").append(stadium_name);
				//Recieves and sends stadium image 
					var pitch = $("#pitch");
					var pitchsrc = team.stadium.image;
					var id = "teampitch";
					pitch.append($("<img>").attr('id',id));
					$("#teampitch").attr('src',pitchsrc);
				//Recieves and sends amount of trophies won
					var trophies = team.trophies;
					$("#trophies").append(trophies);
				//Recieves and sends club website
					var site = team.links.website;
					var sitename = site.split('.')[1] + '.com';
					var website = $("#website");
					var sitetag = $("<a></a>");
					website.append(sitetag);
					sitetag.attr('href','https://'+site).append(sitename);
					sitetag.css('color','white');
					sitetag.attr('target','_blank');
				//Recieves and sends club socials
					var facebook = team.links.facebook;
					$('#club-facebook').attr('href',facebook).attr('target','_blank');
					var twitter = team.links.twitter;
					$('#club-twitter').attr('href',twitter).attr('target','_blank');
					var youtube = team.links.youtube;
					$('#club-youtube').attr('href',youtube).attr('target','_blank');
					var instagram = team.links.instagram;
					$('#club-instagram').attr('href',instagram).attr('target','_blank');
				//Recieves and sends background colour for club page
					var color = team.color;
					$(".jumbotron").css('background',color);
					if(color == '#f5f5f5'){
						$('.words').css('filter','invert(1)')
					};
					if(color == '#fe0'){
						$('.words').css('filter','invert(1)');
					};
				//Recieves and sends club formation
					var formation = team.formation
					$('#formationImg').attr('src',formation).css('width','100%');
			}
			function teamBackground(description){
				var description = description;
				$("#club-description").append(description);
			}
			function teamStats(stats){
				var rating;
				var avPos = stats.avgPos;
				var conceded = stats.conceded;
				var played = stats.played;
				var wins = stats.wins;
				var loss = stats.loss;
				var draws = stats.draws;
				var goals = stats.goals;
				var points = stats.points;
				var position = stats.position;
				var redCard = stats.redCard;
				var yellowCard = stats.yellowCard;
				var possImage = "/img/icons/pass.png";
				var concImage = "/img/icons/concede.png";
				var footballImage = "/img/icons/football.png";
				var perfImage = "/img/icons/100.png";
				var scoreImage = "/img/icons/goal.png";
				var image = "/img/icons/shooto.png";
				var winImage = "/img/icons/wins.png";
				var lossImage = "/img/icons/loss.png";
				var yellowImage = "/img/icons/yellow.png";
				var redImage = "/img/icons/red.png";
				rating = (10*wins+5*draws-7*loss);
     			rating += (7*goals-8*conceded);
     			rating -= (2*yellowCard+4*redCard);
     			rating += avPos;
     			rating /= played;
     			rating *= 100/25;
     			rating = Math.round(rating);
				$('#perfImg').attr('src',perfImage).attr('class','shootit');
				$('#perf').append(rating);
				$("#avPosImg").attr('src',possImage).attr('class','shootit');
				$("#avPos").append(avPos+"%");
				$('#scoredImg').attr('src',scoreImage).attr('class','shootit');
				$('#scored').append(goals);
				$('#concededImg').attr('src',concImage).attr('class','shootit');
				$('#conceded').append(conceded);
				$('#winsImg').attr('src',winImage).attr('class','shootit');
				$('#wins').append(wins);
				$('#playedImg').attr('src',footballImage).attr('class','shootit');
				$('#played').append(played);
				$('#lossImg').attr('src',lossImage).attr('class','shootit');
				$('#loss').append(loss);
				$('#drawsImg').attr('src',image).attr('class','shootit');
				$('#draws').append(draws);
				$('#goalsImg').attr('src',image).attr('class','shootit');
				$('#goals').append(goals);
				$('#pointsImg').attr('src',image).attr('class','shootit');
				$('#points').append(points);
				$('#redcardImg').attr('src',redImage).attr('class','shootit');
				$('#redCard').append(redCard);
				$('#yellowcardImg').attr('src',yellowImage).attr('class','shootit');
				$('#yellowCard').append(yellowCard);
				var span = $('<span></span>');
				$('.shootit').css('height','50px').css('text-align','center');
			}

			//all the teams retrieved are stored in the array 
				teamDescription(team);
				teamBackground(team.description);
				teamStats(team.stats);
		}
	});


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
			function teamPlayers(player){
				var image = player.image;
				var name = player.name;
				var li = $('<li></li>');
				var img = $('<img>');
				var a = $('<a></a>');
				a.attr('href','/players/'+name.replace(' ','_')).append(img);
				li.append(a);
				$('#players').append(li);
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
			function topPerformers(player){
	            var name=$('#top-name');var goals=$("#top-goal");
	            var assists=$("#top-assist");var image=$("#top-image");var link=$('#top_link');
	            var name1=$("#top-name1");var goals1=$("#top-goal1");
	            var assists1=$("#top-assist1");var image1=$("#top-image1");var link1=$('#top_link1');
	            var name2=$("#top-name2");var app=$("#top-app");
	            var clean=$("#top-clean");var image2=$("#top-image2");var link2=$('#top_link2');
	            var defenders = [];
	            for(var i=0; i<player.length; i++){
	              	if(player[i].position === "DF" || player[i].position === "GK")
	                	defenders.push(player[i]);
	            }
	            defenders.sort(function(a,b){              
	                return b.stats.cleanSheet-a.stats.cleanSheet;
	            });
	            for( var i=0; i<player.length; i++){
	              if(i===0){  //handle first player
		            player.sort(function(a,b){return b.stats.goals-a.stats.goals;});
	                name.append(player[0].name);
	                goals.append(player[0].stats.goals);
	                assists.append(player[0].stats.assists);
	                var links = "/players/" + player[0].name.replace(/ /g,'_');
	                link.attr('href',links);
	                image.attr('src',player[0].image).attr('alt',player[0].name);
	                exists(player[0].image, function(status){
						if(status === 404){
							image.attr('src','/img/players/photo-missing.png').attr('alt',player[0].name);    
						}
					});
	              }
	              	if(i===1){	//handle 2nd
			            player.sort(function(a,b){return b.stats.assists-a.stats.assists;});
		                name1.append(""+player[0].name);
		                goals1.append(""+player[0].stats.goals);
		                assists1.append(""+player[0].stats.assists);
		                var links = "/players/" + player[0].name.replace(/ /g,'_');
		                link1.attr('href',links);
		                image1.attr('src',player[0].image).attr('alt',player[0].name);
		                exists(player[0].image, function(status){
							if(status === 404){
								image1.attr('src','/img/players/photo-missing.png').attr('alt',player[0].name);    
							}
						});
	            	}
					if(i==2){ //handle 3rd
						name2.append(""+defenders[0].name);
						clean.append(""+defenders[0].stats.cleanSheet);
						app.append(""+defenders[0].stats.appearances);
						var links = "/players/" + defenders[0].name.replace(/ /g,'_');
						link2.attr('href',links);
						image2.attr('src',defenders[0].image).attr('alt',defenders[0].name);
						exists(defenders[0].image, function(status){
							if(status === 404){
								image2.attr('src','/img/players/photo-missing.png').attr('alt',player[0].name);    
							}
						});
					}
	            }//for
	        }//topPerformers
			for( var i in player){
				teamPlayers(player[i]);
			}
			topPerformers(player);
			function squad(player){
	        	var span = $('<span></span>');var img = $('<img>');var header = $('<h5></h5>');
	        	var cardbody = $('<div></div>');var cardimg = $('<div></div>');var cardblock = $('<div></div>');
	        	var cardlist = $('<ul></ul>'); var list1 = $('<li></li>');var list2 = $('<li></li>');//var cardtitle = $('<div></div>');
	        	var li = $('<li></li>');var a = $('<a></a>').attr('href','/players/'+player.name.replace(' ','_'));
	        	img.attr('id','squad-img').attr('class','img-fluid').attr('src',player.image);
	        	exists(player.image, function(status){
				    if(status === 200){
						
				    }
				    else if(status === 404){
			    		img.attr('src','/img/players/photo-missing.png');    
				    }
				});
				list1.attr('id','stat1');list2.attr('id','stat2');listStat = $('<span></span>').attr('class','listStats');listStat1 = $('<span></span>').attr('class','listStats');
				if(player.position == 'DF' || player.position == 'GK' ){
					list1.append('Appearances: ').append(listStat.append(player.stats.appearances));
					list2.append('Clean Sheets: ').append(listStat1.append(player.stats.cleanSheet));
				}
				else{
					list1.append('Goals: ').append(listStat.append(player.stats.goals));
					list2.append('Assists: ').append(listStat1.append(player.stats.assists));
				}

	        	cardlist.append($('<li></li>').append('Nationality: ').append($('<img>')
	        		.attr('id','nation').attr('class','listStats').attr('src',player.country.image))).append(list1).append(list2);
	        	header.attr('id','squad-name').attr('class','col p-2 m-0').append(player.name).append($('<br>')).append(player.position);
	        	span.append(img);
	        	cardimg.attr('id','squadcard-img').attr('class','card-img-top d-flex align-items-center').append(span).append(header);
	        	cardlist.attr('class','list-group');
	        	var goalie = $('<img>').attr('src','/img/icons/gloves.png').attr('class','icon');
	        	var defence = $('<img>').attr('src','/img/icons/defender.png').attr('class','icon');
	        	var fielder = $('<img>').attr('src','/img/icons/midfielder.png').attr('class','icon');
	        	var forward = $('<img>').attr('src','/img/icons/attack.png').attr('class','icon');
	        	if(player.position == "GK"){header.append(goalie);}
	        	else if(player.position == "DF"){header.append(defence);}
	        	else if(player.position == "MF"){header.append(fielder);}
	        	else if(player.position == "FW"){header.append(forward);}
	        	cardblock.attr('class','card-block').append(cardlist);
	        	cardbody.attr('class','card-body hidden-sm-down').append(cardblock);
	        	var card = $($('<div></div>')).attr('id','squadcard').attr('class','card col').append(cardimg).append(cardbody);
	        	li.append(a.append(card));
	        	a.css('text-decoration','none');
	        	$('#squadlist').append(li);
	        }
			var goalies = [];
			var defenders = [];
			var midfielders = [];
			var attackers = [];
			for( var i in player){
				if(player[i].position == "GK"){
					goalies.push(player[i]);
				}
				else if(player[i].position == "DF"){
					defenders.push(player[i]);
				}
				else if(player[i].position == "MF"){
					midfielders.push(player[i]);
				}
				else if(player[i].position == "FW"){
					attackers.push(player[i]);
				}
			}

			for(var g in goalies){
				squad(goalies[g]);
			}
			for(var d in defenders){
				squad(defenders[d]);
			}
			for(var m in midfielders){
				squad(midfielders[m]);
			}
			for(var a in attackers){
				squad(attackers[a]);
			}
		}
	});

	$.ajax({
		type: 'GET',
		url: 'api/fixtures/' + team,
		success: function(fixtures){
			function shortFixtures(fixture){
                var away = fixture.away.name;
                var aimage = fixture.away.image;
                var aimg = $('<img>').attr('src',aimage).attr('class','shortFixturesImg');
                var home = fixture.home.name;
                var himage = fixture.home.image;
                var himg = $('<img>').attr('src',himage).attr('class','shortFixturesImg');
                var date = fixture.date;
                var time = fixture.time;
                var cardblock = $('<span></span>').attr('class','card-block').css('color','black').css('border-top','2px ridge');
                $('#fixtures').append($(cardblock).append(date).append("<br>").append(himg).append(' '+time+' ').append(aimg));
            }
            function fullFixtures(fixture){
                var away = fixture.away.team.replace('_',' ');
                var aimage = fixture.away.image;
                var aimg = $('<img>').attr('src',aimage).attr('class','fullFixturesImg');
                var home = fixture.home.team.replace('_',' ');
                var himage = fixture.home.image;
                var himg = $('<img>').attr('src',himage).attr('class','fullFixturesImg');
                var date = fixture.date;
                var time = fixture.time;
                var cardblock = $('<span></span>').attr('class','card-block').css('color','black').css('border-top','2px ridge');
                $('#fullFixtures').append($(cardblock).append(date).append('<br>').append(himg).append(' '+time+' ').append(aimg));
            }
            function pastFixtures(fixture){
                var away = fixture.away.team.replace('_',' ');
                var aimage = fixture.away.image;
                var aimg = $('<img>').attr('src',aimage).attr('class','pastFixturesImg');
                var home = fixture.home.team.replace('_',' ');;
                var himage = fixture.home.image;
                var himg = $('<img>').attr('src',himage).attr('class','pastFixturesImg');
                var date = fixture.date;
                var ascore = fixture.away.score;
                var hscore = fixture.home.score;
                var cardblock = $('<span></span>').attr('class','card-block').css('color','black').css('border-top','2px ridge');
                $('#pastFixtures').append($(cardblock).append(date).append('<br>').append(himg).append(' '+hscore+' - '+ascore+' ').append(aimg));
            }
            var fixture = [];
            var results = [];
            for(var f in fixtures){
                if(fixtures[f].away.hasOwnProperty('score') 
                    && fixtures[f].home.hasOwnProperty('score')){
                    results.push(fixtures[f]);
                }
                else{
                    fixture.push(fixtures[f]);
                }
            }
            for(var i=0; i<5; i++){
                shortFixtures(fixture[i]);
            }
            for(var j in fixture){
                fullFixtures(fixture[j]);
            }
            results.reverse();
            for(var k in results){
                pastFixtures(results[k]);
            }


			var res = [];
			var count = 5;
            var badges=[];
			 var myScore, oppScore;
			 for(var i=fixtures.length-1; i>i-count; i--){
			 	if(!fixtures[i].home.hasOwnProperty("score")){
			 		continue;
			 	}
			 	else {
			 		if(fixtures[i].home.team===team){
			 			myScore = fixtures[i].home.score;
               			oppScore = fixtures[i].away.score;
               			badges.push(fixtures[i].away.image);
			 		}
			 		else {
			 			oppScore = fixtures[i].home.score;
               			myScore = fixtures[i].away.score;
               			badges.push(fixtures[i].home.image);
			 		}
			 		myScore > oppScore ? res.push(1):(
             		myScore < oppScore ? res.push(-1):
             		res.push(0));
             		count--;
			 	}	
			 }

			 badges.reverse();
          	var plugin={ beforeDraw: function(chart){
            for( b in badges)
            {
               let img = new Image(40,40);
               img.src = badges[b];
              chart.config.data.datasets[0]._meta[0].data[b]._model.pointStyle = img;
              }//for
            }};
			 var ctx = $('#formChart');
			 var myChart = new Chart(ctx,{
			 	plugins: [plugin],
			 	type: 'line',
			 	data: {
			 		labels: ["4","3","2","l","c"],
			 		datasets:[{
			 			label:'',
		                data: res.reverse(),            
		                backgroundColor: [
		                    'rgba(55, 249,  32, 0.3)',
		                    'rgba(55, 249,  32, 0.3)',
		                    'rgba(55, 249,  32, 0.3)',
		                    'rgba(55, 249,  32, 0.3)',
		                    'rgba(55, 249,  32, 0.3)',
		                ],
		                borderColor: [
	                     	'rgba(55, 249,  32, 1)',
	                     	'rgba(55, 249,  32, 1)',
	                     	'rgba(55, 249,  32, 1)',
	                     	'rgba(55, 249,  32, 1)',
	                     	'rgba(55, 249,  32, 1)',
	                  	],
	                 	borderWidth: 1,
	                 	fill: false
			 		}]
			 	},
			 	options:{
			 		legend:{
			 			display:false
			 		},
			 		tooltips:{
			 			enabled:true
			 		},
			 		scales:{
			 			yAxes:[{
			 				ticks:{
			 					min:-1.2,
			 					max:1.2
			 				},
			 				gridLines:{
			 					display:false,
			 					drawBorder:false
			 				},
			 				display:false
			 			}],
			 			xAxes:[{
			 				ticks:{
			 					fontColor: 'rgba(253,155,23, 1)'
			 				},
			 				gridLines:{
			 					display:false,
			 				}
			 			}]
			 		},
			 		elements:{
                			line:{ tension: 0.1, }
			 		}
			 	}
			 });
		}
	});
	
	$('#myTab a').click(function(e) {
      e.preventDefault();
      $(this).tab('show');
    });

    // store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {
      var id = $(e.target).attr("href").substr(1);
      window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('#myTab a[href="' + hash + '"]').tab('show');

    function load(url) {
    // display loading image here...
	    document.getElementById('loadingImg').visible = true;
	    // request your data...
	    var req = new XMLHttpRequest();
	    req.open("POST", url, true);

	    req.onreadystatechange = function () {
	        if (req.readyState == 4 && req.status == 200) {
	            // content is loaded...hide the gif and display the content...
	            if (req.responseText) {
	                document.getElementById('content').innerHTML = req.responseText;
	                document.getElementById('loadingImg').visible = false;
	            }
	        }
	    };
    request.send(vars);
	}
});
