'use strict';

angular.module('myApp.woolworth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/woolworth', {
    templateUrl: 'woolworth/woolworth.html',
    controller: 'woolworthController'
  });
}])

.controller('woolworthController', ['$scope',function($scope) {
	$scope.message = "welcome to woolworth";
	console.log($scope.message);
}]);