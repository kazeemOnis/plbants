$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'api/teams',
		success: function(teams){
			var search = $('#search');
            var options = {
                url:'api/teams',
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
		}
	});
});