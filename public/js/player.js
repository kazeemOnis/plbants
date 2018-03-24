$(document).ready(function(){
	$( "#loader" ).delay(800).fadeOut(400, function(){
        $( "#mypage" ).fadeIn(900);
    });  
	var player = location.pathname.split('/')[2];
	$.ajax({
		type: 'GET',
		url: 'api/players/' + player,
		success: function(player){ 
			function banner(player){
				var image = player.image; var name = player.name; var logo = player.logo;
				var team = player.team.name; var age = player.age; var position = player.position;
				var number = player.number;var h3=$('<h3></h3>');var br = $('<br>');
				var p = $('<p></p>');
				h3.append(name);p.append(number);
				$('#player-img').attr('src',image);
				$('#details').append(h3).append('Club: '+team).append(br).append('Position: '+position);
				$('#number').append(p);
			}
			function card(player){
				$('#playerCrumb a').append(player.name);
				var position = player.position;
				var appears = $('<span></span>').attr('class','playerstat').append(player.stats.appearances);
				var clean = $('<span></span>').attr('class','playerstat').append(player.stats.cleanSheet);
				var goals = $('<span></span>').attr('class','playerstat').append(player.stats.goals);
				var assists = $('<span></span>').attr('class','playerstat').append(player.stats.assists);
				var shotAcc = $('<span></span>').attr('class','playerstat').append(player.stats.shotAcc);
				var shots = $('<span></span>').attr('class','playerstat').append(player.stats.shots);
				var wins = $('<span></span>').attr('class','playerstat').append(player.stats.wins);
				var conceded = $('<span></span>').attr('class','playerstat').append(player.stats.conceded);
				var duelslost = $('<span></span>').attr('class','playerstat').append(player.stats.duelsLost);
				var duelswon = $('<span></span>').attr('class','playerstat').append(player.stats.duelsWon);
				var tackleAcc = $('<span></span>').attr('class','playerstat').append(player.stats.tackAcc);
				var tackles = $('<span></span>').attr('class','playerstat').append(player.stats.tackles);
				var chances = $('<span></span>').attr('class','playerstat').append(player.stats.chancesCreated);
				var passAcc = $('<span></span>').attr('class','playerstat').append(player.stats.passAcc);
				var passes = $('<span></span>').attr('class','playerstat').append(player.stats.passes);
				var saves = $('<span></span>').attr('class','playerstat').append(player.stats.saves);
				$('#playerstats').append('Appearance').append(appears).append($('<br>'))
				.append('Goals').append(goals).append($('<br>')).append('Assists').append(assists).append($('<br>')).append('Wins').append(wins).append($('<br>'));
				if(position == "DF"){
					$('#playerstats').append('Clean Sheet').append(clean).append($('<br>')).append('Conceded').append(conceded).append($('<br>'))
					.append('Duels Lost').append(duelslost).append($('<br>')).append('Duels Won').append(duelswon).append($('<br>'))
					.append('Tackle Accuracy').append(tackleAcc).append($('<br>')).append('Tackles').append(tackles);
				}
				else if(position == "MF"){
					$('#playerstats').append('Chances').append(chances).append($('<br>'))
					.append('Pass Accuracy').append(passAcc).append($('<br>')).append('Passes').append(passes)
				}
				else if(position == "FW"){
					$('#playerstats').append('Shot Accuracy').append(shotAcc).append($('<br>')).append('Shots').append(shots);
				}
				if(position == "GK"){
					$('#playerstats').append('Clean Sheet').append(clean).append($('<br>')).append('Conceded').append(conceded).append($('<br>'))
					.append('Saves').append(saves);
				}
			}
			$.ajax({
				type: 'GET',
				url: 'api/teams/'+player.team.name,
				success: function(team){
					$('.jumbotron').css('background-color',team.color);
					if(team.color == '#f5f5f5'){
						$('.words').css('filter','invert(1)');
					}
					if(team.color == '#fe0'){
						$('.words').css('filter','invert(1)');
					}
					$('#teamCrumb a').attr('href','/teams/'+team.name.replace(' ','_')).append(team.name);
				}
			});
			banner(player);
			card(player);
		}
	});
});