var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q, teamData){
	this.getTeamData = function(team){
		$q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;

		$http({
			method: 'GET',
			url: url
		}).then(function(data){
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won) {
					wins += 1;

				};
				if (!resluts[i].won) {
					losses -= 1;
				};
			};
			results.wins = wins;
			results.losses = losses;

			defered.resolve(results)
		}, function(err){
			defered.reject(err);
		})

		

		

		return defered.promise;


	}

	this.addNewGame = function(gameObject) {
	var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;


	if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
		gameObj.won = true;
	} else {
		gameObj.won = false;
	}
	$http({
		method: 'POST',
		url: url,
		data: gameObj
	})

	
}
});

