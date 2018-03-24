$(document).ready(function(){
    // $( "#loader" ).delay(800).fadeOut(400, function(){
    //     $( "#mypage" ).fadeIn(900);
    // });
    $.ajax({
        type: 'GET',
        url: 'api/teams',
        success: function(team){
            function table_data(team,diff) {
                var position = team.stats.position;
                var previous = team.stats.prevPosition;
                var club = $('<div></div>').attr('class','hidden-sm-down').css('display','inline-block').append(team.name);
                var played = team.stats.played;
                var wins = team.stats.wins;
                var loss = team.stats.loss;
                var draw = team.stats.draws;
                var goals = team.stats.goals;
                var conceded = team.stats.conceded;
                var diff = diff;
                var points = team.stats.points;
                var tbody = $('<tbody></tbody>');
                var image = team.image;
                var a = $('<a></a>').attr('href','/teams/'+team.name.replace(/ /g,'_'));
                var img = a.append($('<img>').attr('src',image));
                var tbody = $('<tr></tr>');
                var td = $('<td></td>').attr('id','col');
                var up = $('<div></div>').attr('class','arrow-up hidden-sm-down');
                var down = $('<div></div>').attr('class','arrow-down hidden-sm-down');
                var circle = $('<div></div>').attr('class','circle hidden-sm-down');
                if(previous > position){
                    td.append(position).append(up);
                }
                else if(previous == position){
                    td.append(position).append(circle);
                }
                else {
                    td.append(position).append(down);
                }
                var td1 = $('<td></td>').attr('id','col1').append(img).append(club);
                var td2 = $('<td></td>').attr('id','col2').append(played);
                var td3 = $('<td></td>').attr('id','col3').append(wins);
                var td4 = $('<td></td>').attr('id','col4').append(draw);
                var td5 = $('<td></td>').attr('id','col5').append(loss);
                var td6 = $('<td></td>').attr('id','col6').attr('class','hidden-sm-down').append(goals);
                var td7 = $('<td></td>').attr('id','col7').attr('class','hidden-sm-down').append(conceded);
                var td8 = $('<td></td>').attr('id','col8').append(diff);
                var td9 = $('<td></td>').attr('id','col9').append(points);
                $('#positions').append(tbody);
                tbody.attr('id','body');
                tbody.append(td,td1,td2,td3,td4,td5,td6,td7,td8,td9);
            }
            for(var i in team){
                var diff = (team[i].stats.goals) - (team[i].stats.conceded);
                table_data(team[i],diff);
            }
            console.log(team);
        }
    });

    $.ajax({
        type: 'GET',
        url: 'api/players',
        success: function(player){
            var search = $('#search');
            var options = {
                url:'api/players',
                minCharNumber:1,
                list:{
                    sort:{enabled:true},
                    match:{enabled: true},
                    showAnimation: {
                        type: "slide"
                    },
                    hideAnimation:{
                        type: "slide"
                    }
                },
                template:{
                    type: "iconRight",
                    fields: {
                        iconSrc: "image"
                    }
                },    
                highlightPhrase: false,
                requestDelay: 700,
                getValue: "name",
                theme: "dark"
            };
            search.easyAutocomplete(options);
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
            function topGoals(player){
                player.sort(function(a,b){
                    return b.stats.goals-a.stats.goals;
                });
                for(var i=0; i<=3; i++){
                    var name = "#goal-name" + i; var image = "#goal-image" + i; 
                    var goals= "#goals" + i;  var link = "#goal-link"+i;
                    $(name).append(player[i].name);
                    $(goals).append(player[i].stats.goals);
                    $(image).attr('src',player[i].image);
                    var href = "/players/" + player[i].name.replace(' ','_');
                    $(link).attr('href',href);
                }
            }
            function topAssists(player){
                player.sort(function(a,b){
                    return b.stats.assists - a.stats.assists;
                });
                for(var i =0; i<=3; i++){
                    var image = "#assist-image" + i; var name = "#assist-name" + i;
                    var assists = "#assist" + i; var link = "#assist-link"+i;
                    $(name).append(player[i].name);
                    $(assists).append(player[i].stats.assists);
                    $(image).attr('src',player[i].image);
                    var href = "/players/" + player[i].name.replace(' ','_');
                    $(link).attr('href',href);
                }
            }
            topGoals(player);
            topAssists(player);   
        }
    }); 
    /**$(document).ajaxStop(function(){
        $("#loader").fadeOut();
        $("#mypage").fadeIn();
    });**/       
});



