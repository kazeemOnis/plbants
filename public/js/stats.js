$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'api/players',
		success: function(players){
			function topScorers(players){
				var topPlayers =[];
				players.sort(function(a,b){
					return b.stats.goals - a.stats.goals;
				});
				for(var i=0; i<20; i++){
					topPlayers.push(players[i]);
				}
			}
          function topAssists(players){
              var topPlayers = [];
              players.sort(function(a,b){
                  return b.stats.assists - a.stats.assists;
              });
              for(var i=0;i<20; i++){
                  topPlayers.push(players[i]);
              }
            console.log(topPlayers);
          }
          
          function topPerformers(players)
          {
            let performers = new Array(2);  
            performers[0] = [];
            performers[1] = [];

            players.sort(function(a,b){
                return b.stats.assists - a.stats.assists;
            });
            for(var i=0;i<20; i++){
                performers[0].push(players[i]);
            }
            players.sort(function(a,b){
              return b.stats.goals - a.stats.goals;
            });
            for(var i=0;i<20; i++) performers[1].push(players[i]);
            
          }//topPerformers
          topPerformers(players);
		}//sxs_fxn
	});
});