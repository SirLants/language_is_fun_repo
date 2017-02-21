angular.module('angularTest',['ngRoute'])

.config(function ($routeProvider){
	$routeProvider.
		when('/',
			{
				controller: 'FrontPageController',
				templateUrl: '../partials/FrontPage.html'
			}).
		when('/partial2',
			{
				controller: 'MapPageController',
				templateUrl: '../partials/MapPage.html'
			}).
		when('/partial3',
			{
				controller: 'ModalTestPageController',
				templateUrl: '../partials/ModalTestPage.html'
			}).
		otherwise({ redirectTo: '/' });
})

.factory('frontPageFactory', function() {
	var newsReel = [
		{ title: 'News Items 1'},
		{ title: 'News Items 2'},
		{ title: 'News Items 3'}
	];

	var hotDeals = [
		{ address: '4300 South Plains Drive'},
		{ address: '1141 South 44th Street'},
		{ address: '1800 Normandy Lane'}
	];

	var infoList = [
		{ link: 'How To Use' },
		{ link: 'General Tips' },
		{ link: 'Where To Find'}
	];

	var users = [
		{ zipcode: ''}
	];

	var factory = {};
	factory.getNews = function() {
		return newsReel;
	};
	factory.getDeals = function() {
		return hotDeals;
	}
	factory.getInfo = function() {
		return infoList;
	}
	factory.getUser = function() {
		return users;
	}

	return factory;
})

.controller('FrontPageController', function ($scope, frontPageFactory) {
	$scope.newsReel = [];
	$scope.hotDeals = [];
	$scope.infoList = [];
	$scope.users = [];

	$scope.addUser = function () {
		$scope.users.push(
			{
				zipcode: $scope.newUser.zipcode
			}
		);
	};

	init();

	function init() {
		$scope.newsReel = frontPageFactory.getNews();
		$scope.hotDeals = frontPageFactory.getDeals();
		$scope.infoList = frontPageFactory.getInfo();
		$scope.users = frontPageFactory.getUser();
	}
})

.factory('mapPageFactory', function() {
	var person = { firstName: 'Lance', lastName: 'Johnson' };

	var factory = {};

	factory.getPerson = function() {
		return person;
	}

	return factory;
})

.controller('MapPageController', function ($scope, mapPageFactory) {

	$scope.person = [];

	init();

	function init() {
		$scope.person = mapPageFactory.getPerson();
	}
})

.factory('modalTestPageFactory', function() {
	var test = { test: 'Test' };

	var factory = {};

	factory.getTest = function() {
		return test;
	}

	return factory;
})

.controller('ModalTestPageController', function($scope, modalTestPageFactory){

	$scope.test = [];

	init();

	function init() {
		$scope.test = modalTestPageFactory.getTest();
	}

})