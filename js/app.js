var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
  $routeProvider
  .when('/', {
  	templateUrl: 'js/home/homeTmpl.html',
  	controller: 'homeCtrl'
  }).when ('/teams/:team', {
  	templateUrl: 'js/teams/teamTmpl.html',
  	controller: 'teamCtrl',
  	resolve: {
  		teamData: function(teamService, $route){
  			teamService.getTeamData($route.current.params.team).then(
  				function(results) {
  					return results;
  				})
  				
  		}
  	}
  
})
  .otherwise ({
  	redirectTo: '/'
  })

  
});