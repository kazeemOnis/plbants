$(document).ready(function(){
    var $table = $('#positions');
    var team = ['Arsenal', 'Bourenmouth', 'Brighton', 'Burnley', 'Chelsea',
                'Crystal Palace', 'Everton', 'Huddersfield', 'Leicester',
                'Liverpool', 'Manchester City', 'Manchesterter United', 'Newcastle United',
                'Southampton', 'Stoke City', 'Swansea', 'Tottenham', 'Watford', 'West Bromwich Albion',
                'West Ham United' ];

    $.ajax({
        type: 'GET',
        url: 'api/teams/' + team,
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
                var tbody = $('<tbody></tbody>');
                var td = $('<td></td>').attr('id','col').append(position);
                var td1 = $('<td></td>').attr('id','col1').append(club);
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
            for(var i in team){
                var diff = parseInt(team[i].stats.goals) - parseInt(team[i].stats.conceded);
                table_data(team[i].image,team[i].stats.position,team[i].name,team[i].stats.played,team[i].stats.wins,
                    team[i].stats.loss,team[i].stats.draws,team[i].stats.goals,
                    team[i].stats.conceded,diff,team[i].stats.points);
            }
            for(var i =1; i<=20; i++){
                td.append(i);
            }
            for(var i in team){
                var diff = team[i].stats.goals - team[i].stats.conceded;
                for(var x=1; x<=20; x++){
                    if(parseInt(td.text()) == team[i].stats.pos){
                        table_data(team[i].image,team[i].stats.position,team[i].name,team[i].stats.played,team[i].stats.wins,
                    team[i].stats.loss,team[i].stats.draws,team[i].stats.goals,
                    team[i].stats.conceded,diff,team[i].stats.points);
                    }
                }
            }
        }
    });
});

