var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function () {
		$scope.showNewGameForm = !$scope.showNewGameForm;

	}
	if ($routeParams.team === 'Utah Jazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png';
	}
	if ($routeParams.team === 'Los Angeles Lakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png';
	}
	if ($routeParams.team === 'Miami Heat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png';

	}
	$scope.submitGame = function () {
		$scope.newGame.homeTeam = scope.homeTeam.split(' ').join('').toLowerCase();
		addNewGame($scope.newGame).then(function(){
			getTeamData($scope.newGame.homeTeam).then(function(results){
				$scope.teamData = results;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			})
		})

		}
	  
	






});