$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'api/teams',
        success: function(team){
            function table_data(image,count,name,played,wins,loss,draw,goals,conceded,diff,points) {
                var position = count;
                var club = name;
                var played = played;
                var win = wins;
                var loss = loss;
                var draw = draw;
                var goalsFor = goals;
                var goalsAgainst = conceded;
                var goalsDiff = diff;
                var points = points;

                var td = $('<td></td>').attr('id','col').append(position);
                var td1 = $('<td></td>').attr('id','col1').append(club);

                var image = image;
                var img = $('<img>').attr('src',image);
                img.css('width','20px');
                var tbody = $('<tr></tr>');
                var td = $('<td></td>').attr('id','col').append(position);
                var td1 = $('<td></td>').attr('id','col1').append(img).append(club);
                var td2 = $('<td></td>').attr('id','col2').append(played);
                var td3 = $('<td></td>').attr('id','col3').append(wins);
                var td4 = $('<td></td>').attr('id','col4').append(loss);
                var td5 = $('<td></td>').attr('id','col5').append(draw);
                var td6 = $('<td></td>').attr('id','col6').append(goals);
                var td7 = $('<td></td>').attr('id','col7').append(conceded);
                var td8 = $('<td></td>').attr('id','col8').append(diff);
                var td9 = $('<td></td>').attr('id','col9').append(points);
                $('#positions thead').after(tbody);
                tbody.attr('id','body');
                tbody.append(td,td1,td2,td3,td4,td5,td6,td7,td8,td9);
            }
            function sortTable() {
                var table, rows, switching, i, x, y, shouldSwitch;
                table = document.getElementById("positions");
                switching = true;
                while (switching) {
                    switching = false;
                    rows = table.getElementsByTagName("TR");
                    for (i = 1; i < (rows.length - 1); i++) {
                      shouldSwitch = false;
                      x = rows[i].getElementsByTagName("TD")[0];
                      y = rows[i + 1].getElementsByTagName("TD")[0];
                    if (parseInt(x.innerHTML.toLowerCase()) > parseInt(y.innerHTML.toLowerCase())) {
                        shouldSwitch= true;
                        break;
                      }
                    }
                    if (shouldSwitch) {
                      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                      switching = true;
                    }
                }
            }
            for(var i in team){
                var diff = parseInt(team[i].stats.goals) - parseInt(team[i].stats.conceded);
                table_data(team[i].image,team[i].stats.position,team[i].name,team[i].stats.played,team[i].stats.wins,
                    team[i].stats.loss,team[i].stats.draws,team[i].stats.goals,
                    team[i].stats.conceded,diff,team[i].stats.points);
            }
            sortTable();
        }
    });

    $.ajax({
        type:'GET',
        url:'api/players',
        success: function(players){
            var search = $('#search');
            var options = {
                url:'api/players',
                minCharNumber:1,
               list:{
                 sort:{enabled:true},
                 match:{enabled: true},
               },    
               highlightPhrase: false,
               getValue: "name"
            };
            search.easyAutocomplete(options);
            function topGoals(player){
                player.sort(function(a,b){
                    return b.goals-a.goals;
                });
                for(var i=0; i<=3; i++){
                    var name = "#goal-name" + i; var image = "#goal-image" + i; 
                    var goals= "#goals" + i;  var link = "#goal-link"+i;
                    $(name).append(player[i].name);
                    $(goals).append(player[i].goals);
                    $(image).attr('src',player[i].image);
                    var href = "/players/" + player[i].name;
                    $(link).attr('href',href);
                }
            }
            function topAssists(player){
                player.sort(function(a,b){
                    return b.assists - a.assists;
                });
                for(var i =0; i<=3; i++){
                    var image = "#assist-image" + i; var name = "#assist-name" + i;
                    var assists = "#assist" + i; var link = "#assist-link"+i;
                    $(name).append(player[i].name);
                    $(assists).append(player[i].assists);
                    $(image).attr('src',player[i].image);
                    var href = "/players/" + player[i].name;
                    $(link).attr('href',href);
                }
            }
            var goalkeepers = [];
            for(var i=0; i<players.length; i++){
                if(players[i].position === "GK")
                    goalkeepers.push(players[i]);
            }
            goalkeepers.sort(function(a,b){              
                return b.cleanSheet-a.cleanSheet;
            });
            function topGoalies(player){
                for(var i=0; i<=3; i++){
                    var image = "#sheet-image"+i; var name = "#sheet-name" + i;
                    var cleenSheets = "#sheet"+i; var link = "#sheet-link" + i;
                    $(name).append(player[i].name);
                    $(cleenSheets).append(player[i].cleanSheet);
                    $(image).attr('src',player[i].image);
                    var href = '/players/' + player[i].name;
                    $(link).attr('href',href);
                }
            }
            topGoals(players);
            topAssists(players);
            //topGoalies(goalkeepers);

          }      
        });
}); 

