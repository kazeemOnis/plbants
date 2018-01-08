$(document).ready(function(){
    var $table = $('#positions');
    var team = ['Arsenal', 'Bourenmouth', 'Brighton', 'Burnley', 'Chelsea',
                'Crystal Palace', 'Everton', 'Huddersfield', 'Leicester',
                'Liverpool', 'Manchester City', 'Manchesterter United', 'Newcastle United',
                'Southampton', 'Stoke City', 'Swansea', 'Tottenham', 'Watford', 'West Bromwich Albion',
                'West Ham United' ][2];
                console.log(team);

    // function mydata = {
    //     'club': String,
    //     'played': Number,
    //     'win': Number,
    //     'loss': Number,
    //     'draw': Number,
    //     'goalsFor': Number,
    //     'goalsAgainst': Number,
    //     'goalsDiff': Number,
    //     'points': Number }

    $.ajax({
        type: 'GET',
        url: 'api/teams/' + team,
        success: function(team){
        }
    })

    $(function () {
        $('#positions').bootstrapTable({
            data: team
        });
    });

    function sortPoints(a,b)
    {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    }
});

