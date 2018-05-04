'use strict';

angular.module('myApp.coles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coles', {
    templateUrl: 'coles/coles.html',
    controller: 'colesController'
  });
}])

.controller('colesController', ['$scope',function($scope) {
	$scope.message = "welcome to coles";
	console.log($scope.message);
}]);