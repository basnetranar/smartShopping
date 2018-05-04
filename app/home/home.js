'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeController'
  });
}])

.controller('homeController', ['$scope','$http',function($scope,$http) {
	$scope.message = "welcome to home";
	console.log($scope.message);
	$scope.findItems = function(){
		console.log("You searched for " + $scope.searchField);
	};
	var zip = 2217;
	$http.get(' http://api.apixu.com/v1/forecast.json?key=831ba80bf1bf44dc9ba32019180305&q=new york')
		.then(function successCallback(response){
		$scope.data = response.data;
		console.log($scope.data.current.feelslike_c);
		$scope.response = response;
		// console.log($scope.response);
	}),
	function errorCallback(response) {
		console.log("page is invalid")};
}]);