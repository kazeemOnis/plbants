$('li').on('click', function(){
	var teams = ["Arsenal", "Bournemouth", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leicester", "Liverpool", "Manchester City", "Mancehster Utd",
		 		 "Huddersfield", "Newcastle", "Southhampton", "Stock City", "Swansea", "Tottenham", "Watford", "West Brom", "West Ham" ]
	var val = $(this).val();
	var team = teams[val].replace(/\ /g,'_');
	// var url = "/team/" + team;
	var url = "/team.html";
			
	$.ajax({
		type: 'GET',
		url: 'api/teams/?teamname=' + team,
		success: function(team){
			console.log(team);
			console.log(val);
			window.location.href = url
		}
	});
});

