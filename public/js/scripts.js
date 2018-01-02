
var $table = $('#positions');
    var mydata = 
[
    {
        "id": 1,
        "club": "Manchester City",
        "played": 17,
        "win": 16,
        "loss": 1,
        "draw": 0,
        "goalsFor": 52,
        "goalsAgainst": 11,
        "goalDiff": 41,
        "points": 49
    },
    {
        "id": 2,
        "club": "Manchester United",
        "played": 17,
        "win": 12,
        "loss": 2,
        "draw": 3,
        "goalsFor": 37,
        "goalsAgainst": 11,
        "goalDiff": 26,
        "points": 38
    },
    {
        "id": 3,
        "club": "Chelsea",
        "played": 17,
        "win": 11,
        "loss": 2,
        "draw": 4,
        "goalsFor": 31,
        "goalsAgainst": 14,
        "goalDiff": 17,
        "points": 35
    },
    {
        "id": 4,
        "club": "Tottenham",
        "played": 17,
        "win": 9,
        "loss": 4,
        "draw": 4,
        "goalsFor": 30,
        "goalsAgainst": 14,
        "goalDiff": 16,
        "points": 31
    },
    {
        "id": 5,
        "club": "Liverpool",
        "played": 17,
        "win": 8,
        "loss": 7,
        "draw": 2,
        "goalsFor": 34,
        "goalsAgainst": 20,
        "goalDiff": 14,
        "points": 31
    },
    {
        "id": 6,
        "club": "Burnley",
        "played": 17,
        "win": 9,
        "loss": 4,
        "draw": 4,
        "goalsFor": 16,
        "goalsAgainst": 12,
        "goalDiff": 4,
        "points": 31
    },
    {
        "id": 7,
        "club": "Arsenal",
        "played": 17,
        "win": 9,
        "loss": 3,
        "draw": 5,
        "goalsFor": 30,
        "goalsAgainst": 20,
        "goalDiff": 10,
        "points": 30
    },
    {
    	"id": 8,
    	"club": "Leicester City",
        "played": 17,
        "win": 7,
        "loss": 5,
        "draw": 5,
        "goalsFor": 27,
        "goalsAgainst": 23,
        "goalDiff": 4,
        "points": 26
    },
    {
    	"id": 9,
    	"club": "Watford",
        "played": 17,
        "win": 6,
        "loss": 4,
        "draw": 7,
        "goalsFor": 26,
        "goalsAgainst": 29,
        "goalDiff": -3,
        "points": 22
    },
    {
    	"id": 10,
    	"club": "Everton",
        "played": 17,
        "win": 6,
        "loss": 4,
        "draw": 7,
        "goalsFor": 21,
        "goalsAgainst": 29,
        "goalDiff": -8,
        "points": 22
    },
    {
    	"id": 11,
    	"club": "Southampton",
        "played": 17,
        "win": 4,
        "loss": 6,
        "draw": 7,
        "goalsFor": 17,
        "goalsAgainst": 23,
        "goalDiff": -6,
        "points": 18
    },
    {
    	"id": 12,
    	"club": "Huddersfield",
        "played": 17,
        "win": 5,
        "loss": 3,
        "draw": 9,
        "goalsFor": 12,
        "goalsAgainst": 29,
        "goalDiff": -17,
        "points": 18
    },
    {
    	"id": 13,
    	"club": "Brighton",
        "played": 17,
        "win": 4,
        "loss": 5,
        "draw": 8,
        "goalsFor": 14,
        "goalsAgainst": 23,
        "goalDiff": -9,
        "points": 17
    },
    {
    	"id": 14,
    	"club": "Bourenmouth",
    	"played": 17,
    	"win": 4,
        "loss": 9,
        "draw": 4,
        "goalsFor": 15,
        "goalsAgainst": 20,
        "goalDiff": -5,
        "points": 16
    },
	{
		"id": 15,
		"club": "Stoke City",
        "played": 17,
        "win": 4,
        "loss": 9,
        "draw": 4,
        "goalsFor": 19,
        "goalsAgainst": 36,
        "goalDiff": -17,
        "points": 16
	},
	{
		"id": 16,
		"club": "Newcastle",
        "played": 17,
        "win": 4,
        "loss": 10,
        "draw": 3,
        "goalsFor": 16,
        "goalsAgainst": 26,
        "goalDiff": -10,
        "points": 15
	},
	{
		"id": 17,
		"club": "West Brom",
        "played": 17,
        "win": 2,
        "loss": 7,
        "draw": 8,
        "goalsFor": 12,
        "goalsAgainst": 22,
        "goalDiff": -10,
        "points": 14
	},
	{
		"id": 18,
		"club": "Crystal Palace",
        "played": 17,
        "win": 3,
        "loss": 9,
        "draw": 5,
        "goalsFor": 12,
        "goalsAgainst": 28,
        "goalDiff": -16,
        "points": 14
	},
	{
		"id": 19,
		"club": "West Ham United",
        "played": 17,
        "win": 3,
        "loss": 9,
        "draw": 5,
        "goalsFor": 14,
        "goalsAgainst": 32,
        "goalDiff": -18,
        "points": 14
	},
	{
		"id": 20,
		"club": "Swansea City",
        "played": 17,
        "win": 3,
        "loss": 11,
        "draw": 3,
        "goalsFor": 9,
        "goalsAgainst": 22,
        "goalDiff": -13,
        "points": 12
	}
];

$(function () {
    $('#positions').bootstrapTable({
        data: mydata
    });
});

function sortPoints(a,b)
{
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
}