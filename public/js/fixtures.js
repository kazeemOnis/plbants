$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'api/fixtures',
		success: function(fixtures){
			function showResults(fixture){
                var away = fixture.away.team.replace('_',' ');
                var aimage = fixture.away.image;
                var aimg = $('<img>').attr('src',aimage).attr('class','pastFixturesImg');
                var home = fixture.home.team.replace('_',' ');
                var himage = fixture.home.image;
                var himg = $('<img>').attr('src',himage).attr('class','pastFixturesImg');
                var date = fixture.date;
                var ascore = fixture.away.score;
                var hscore = fixture.home.score;
                var cardblock = $('<span></span>').attr('class','card-block').css('color','black').css('border-top','2px ridge');
                $('#pastFixtures').append($(cardblock).append(date).append('<br>').append(himg).append(' '+hscore+' - '+ascore+' ').append(aimg));
            }
            function showFixtures(fixture){
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
            for(var i in results.reverse()){
            	//console.log(results[i]);
            	showResults(results[i]);
            }	
            for(var j in fixture){
            	showFixtures(fixture[j]);
            }
		}
	});
});