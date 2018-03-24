$(document).ready(searchByStat('goals'));
var statsBody = $('#statsBody');
function exists(url, cb){
	$.ajax({
		url: url,
		dataType: 'text',
		type: 'GET',
		complete: function(xhr){
			if(typeof cb == 'function'){
				cb.apply(this,[xhr.status]);
			}
		}
	});
}
function showPlayers(player,stat){
	var stats;
	function selecStat(stat){
		if(stat == 'goals'){
			stats  = player.stats.goals;
		}
		else if(stat == 'assists'){
			stats  = player.stats.assists;	
		}
		else if(stat == 'cleanSheet'){
			stats  = player.stats.cleanSheet;	
		}
		else if(stat == 'saves'){
			stats  = player.stats.saves;	
		}
		else if(stat == 'tackles'){
			stats  = player.stats.tackles;	
		}
		else if(stat == 'tackAcc'){
			stats  = player.stats.tackAcc;	
		}
		else if(stat == 'duelsWon'){
			stats  = player.stats.duelsWon;	
		}
		else if(stat == 'duelsLost'){
			stats  = player.stats.duelsLost;	
		}
		else if(stat == 'passes'){
			stats  = player.stats.passes;	
		}
		else if(stat == 'passAcc'){
			stats  = player.stats.passAcc;	
		}
		else if(stat == 'chancesCreated'){
			stats  = player.stats.chancesCreated;	
		}
		else if(stat == 'shots'){
			stats  = player.stats.shots;	
		}
		else if(stat == 'shotAcc'){
			stats  = player.stats.shotAcc;	
		}
		else{
			stats = player.stats.appearances;
		}
		return stats;
	}
	selecStat(stat);
	var image = player.image;
	var name = player.name;
	var country = player.country.name;
	var countryImg = player.country.image;
	var team = player.team.name;
	var teamImg = player.team.image;
	var tr = $('<tr></tr>');
	var img = $('<img>');
	exists(image,function(status){
		if(status === 200){
			img.attr('src',image);
		}
		else {
			img.attr('src','/img/players/photo-missing.png');
		}
	});
	var img1 = $('<img>').attr('src',teamImg);
	var img2 = $('<img>').attr('src',countryImg);
	var a = $('<a></a>').attr('href','/players/'+name.replace(/ /g,'_'));
	var a1 = $('<a></a>').attr('href','/teams/'+team.replace(/ /g,'_'));
	a.append(img);
	a.append(name);
	a1.append(img1);
	a1.append(team);
	var playertd = $('<td></td>').attr('id','col1').append(a);
	var teamtd = $('<td></td>').attr('id','col1').attr('class','hidden-sm-down').append(a1);
	var countrytd = $('<td></td>').attr('id','col1').attr('class','hidden-sm-down').append(img2).append(country);
	var stattd = $('<td></td>').attr('id','col1').append(stats);
	tr.append(playertd);
	tr.append(teamtd);
	tr.append(countrytd);
	tr.append(stattd);
	statsBody.append(tr);

}
function searchByStat(stat){
	$.ajax({
		type: 'GET',
		url: 'api/stats/'+stat,
		success: function(players){
			var topPlayers =[];
			for(var i=0; i<20; i++){
				topPlayers.push(players[i]);
			}
			for(var player in topPlayers){
				showPlayers(topPlayers[player],stat);
			}
		}
	});
}

var goals = $('button.dropdown-item#0');
goals.click(function(){
	statsBody.empty();
	searchByStat('goals');
});
var assists = $('button.dropdown-item#1');
assists.click(function(){
	statsBody.empty();
	searchByStat('assists');
});
var cleanSheet = $('button.dropdown-item#2');
cleanSheet.click(function(){
	statsBody.empty();
	searchByStat('cleanSheet');
});
var app = $('button.dropdown-item#3');
app.click(function(){
	statsBody.empty();
	searchByStat('appearances');
});
var passes = $('button.dropdown-item#4');
passes.click(function(){
	statsBody.empty();
	searchByStat('passes');
});
var passAcc = $('button.dropdown-item#5');
passAcc.click(function(){
	statsBody.empty();
	searchByStat('passAcc');
}) ;
var chances = $('button.dropdown-item#6');
chances.click(function(){
	statsBody.empty();
	searchByStat('chancesCreated');
});
var shots = $('button.dropdown-item#7');
shots.click(function(){
	statsBody.empty();
	searchByStat('shots');
});
var shotAcc = $('button.dropdown-item#8');
shotAcc.click(function(){
	statsBody.empty();
	searchByStat('shotAcc');
});
var tackles = $('button.dropdown-item#9');
tackles.click(function(){
	statsBody.empty();
	searchByStat('tackles');
});
var tackleAcc = $('button.dropdown-item#10');
tackleAcc.click(function(){
	statsBody.empty();
	searchByStat('tackAcc');
});
var duelWon = $('button.dropdown-item#11');
duelWon.click(function(){
	statsBody.empty();
	searchByStat('duelsWon');
});
var duelLost = $('button.dropdown-item#12');
duelLost.click(function(){
	statsBody.empty();
	searchByStat('duelsLost');
});
var saves = $('button.dropdown-item#13');
saves.click(function(){
	statsBody.empty();
	searchByStat('saves');
});