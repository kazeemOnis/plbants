$(document).ready(function(){
	var player = location.pathname.split('/')[2];
	$.ajax({
		type: 'GET',
		url: 'api/players/' + player,
		success: function(player){
			console.log(player);
		}
	});
});