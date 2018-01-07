/**$('li').on('click', function(){
	var teams = ["Arsenal", "Bournemouth", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leicester", "Liverpool", "Manchester City", "Mancehster Utd",
		 		 "Huddersfield", "Newcastle", "Southhampton", "Stock City", "Swansea", "Tottenham", "Watford", "West Brom", "West Ham" ]
	var val = $(this).val();
	var team = teams[val].replace(/\ /g,'_');
	// var url = "/team/" + team;
	var url = "/team.html";
			
	$.ajax({
		type: 'GET',
		url: 'api/teams',
		success: function(team){
			console.log(team);
			console.log(val);
			window.location.href = url
		}
	});
});**/

//use ajax to retrieve all the teams in the database/api
$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'api/teams',
		success: function(team){
			//all the teams retrieved are stored in the array 
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
