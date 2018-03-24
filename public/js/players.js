$(document).ready(loadAllPlayers());
var playerBody = $('#playerBody');
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
function checkPos(position){
	var pos;
	if(position == 'MF'){
		pos = "Midfielder";
	}
	else if(position == 'GK') {
		pos = 'Goalkeeper';
	}
	else if(position == 'FW') {
		pos = 'Forward';
	}
	else{
		pos = "Defender";
	}
	return pos;
}
function showPlayers(player){
	var image = player.image;
	var name = player.name;
	var country = player.country.name;
	var countryImg = player.country.image;
	var position = checkPos(player.position);
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
	var img2 = $('<img>').attr('src',countryImg);
	var a = $('<a></a>').attr('href','/players/'+name.replace(/ /g,'_'));
	a.append(img);
	a.append(name);
	var playertd = $('<td></td>').attr('id','col1').append(a);
	var positiontd = $('<td></td>').attr('id','col1').attr('class','hidden-sm-down').append(position);
	var countrytd = $('<td></td>').attr('id','col1').attr('class','hidden-sm-down').append(img2).append(country);
	tr.append(playertd);
	tr.append(positiontd);
	tr.append(countrytd);
	playerBody.append(tr);
}
function loadAllPlayers(){
	$.ajax({
		type: 'GET',
		url: 'api/players',
		success: function(players){
			if(!playerBody.is(':empty')){
				playerBody.empty();
			}
			for(var player in players){
				showPlayers(players[player]);
			}
		}
	});
}
function searchByTeam(team){
	playerBody.empty();
	$.ajax({
		type: 'GET',
		url: 'api/players/'+team,
		success: function(players){
			for(var player in players){
				showPlayers(players[player]);
			}
			console.log(team);
		}
	});
}
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

var allClubs = $('button.dropdown-item#0');
allClubs.on('click',loadAllPlayers);

var arsenal = $('button.dropdown-item#1');
arsenal.click(function(){
	searchByTeam(arsenal.text());
});

var bournemouth =  $('button.dropdown-item#2');
bournemouth.click(function(){
	searchByTeam(bournemouth.text());
});

var brighton =  $('button.dropdown-item#3');
brighton.click(function(){
	searchByTeam(bournemouth.text().replace(/ /g,'_'));
});

var burnley =  $('button.dropdown-item#4');
burnley.click(function(){
	searchByTeam(burnley.text());
});

var chelsea =  $('button.dropdown-item#5');
chelsea.click(function(){
	searchByTeam(chelsea.text());
});

var crystal =  $('button.dropdown-item#6');
crystal.click(function(){
	searchByTeam(crystal.text().replace(/ /g,'_'));
});

var everton =  $('button.dropdown-item#7');
everton.click(function(){
	searchByTeam(everton.text().replace(/ /g,'_'));
});

var huddersfield =  $('button.dropdown-item#8');
huddersfield.click(function(){
	searchByTeam(huddersfield.text().replace(/ /g,'_'));
});

var leicester =  $('button.dropdown-item#9');
leicester.click(function(){
	searchByTeam(leicester.text().replace(/ /g,'_'));
});

var liverpool =  $('button.dropdown-item#10');
liverpool.click(function(){
	searchByTeam(liverpool.text().replace(/ /g,'_'));
});

var mancity =  $('button.dropdown-item#11');
mancity.click(function(){
	searchByTeam(mancity.text().replace(/ /g,'_'));
});

var manutd =  $('button.dropdown-item#12');
manutd.click(function(){
	searchByTeam(manutd.text().replace(/ /g,'_'));
});

var newcastle =  $('button.dropdown-item#13');
newcastle.click(function(){
	searchByTeam(newcastle.text().replace(/ /g,'_'));
});

var southampton =  $('button.dropdown-item#14');
southampton.click(function(){
	searchByTeam(southampton.text().replace(/ /g,'_'));
});

var stoke =  $('button.dropdown-item#15');
stoke.click(function(){
	searchByTeam(stoke.text().replace(/ /g,'_'));
});

var tottenham =  $('button.dropdown-item#16');
tottenham.click(function(){
	searchByTeam(tottenham.text().replace(/ /g,'_'));
});

var swansea =  $('button.dropdown-item#17');
swansea.click(function(){
	searchByTeam(swansea.text().replace(/ /g,'_'));
});

var watford =  $('button.dropdown-item#18');
watford.click(function(){
	searchByTeam(watford.text().replace(/ /g,'_'));
});

var westbrom =  $('button.dropdown-item#19');
westbrom.click(function(){
	searchByTeam(westbrom.text().replace(/ /g,'_'));
});

var westham =  $('button.dropdown-item#20');
westham.click(function(){
	searchByTeam(westham.text().replace(/ /g,'_'));
});







