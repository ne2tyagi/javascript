
//https://holidayapi.com/v1/holidays?key=API_KEY&country=US&year=2016&month=05
/*
Test API Key:
aaa1410f-bea2-49c9-9983-0997157698d4
Test keys are unmetered and return dummy holiday day.

*/

(function(){
'use strict';

var apiUrl = 'https://holidayapi.com/v1/holidays?key=';
var apiKey = 'aaa1410f-bea2-49c9-9983-0997157698d4';

angular.module('TestApp')
.controller('HolidayCtrl', function(Holidays, $scope){
	$scope.holidays = [];
	Holidays.getHolidays('US','2015').then(function(result){
		console.log(result);
		$scope.holidays = result.data.status === 200 ? result.data.holidays : [];
	}, function(){
		console.log('Could not fetch holidays.');
	});
})

.service('Holidays', function($q, $http){
	
	this.getHolidays = function(country, year, month, day){
		return $http.get(apiUrl + apiKey + '&country='+ country
			+'&year='+year+(month?'&month='+month:'')+(day?'&day='+day:''));
	}
})
.config(function($stateProvider, $urlRouterProvider){
		$stateProvider.state('page1',{
			url:'',
			controller:'HolidayCtrl',
			templateUrl:'holidays.html'
		}).state('page1.holiday',{
			url: '/holiday/:year/:month/:day',
			views:{
				'detail@page1':{
					template:'<md-content layout-padding ng-if="holidayDetail">\
					Name: {{ holidayDetail.name }}\
					Date: {{ holidayDetail.date }}\
					Public: {{holidayDetail.public}}\
					</md-content>',
					controller: function($stateParams, Holidays, $scope){
						console.log('holiday page',$stateParams);
						Holidays.getHolidays('US', $stateParams.year, $stateParams.month, $stateParams.day).then(function(result){
							console.log(result);
							$scope.holidayDetail = result.data.status === 200 ? result.data.holidays[0] : [];
						}, function(){
							console.log('Could not fetch holiday details.');
						});
					}
				}
			}
		});

		$urlRouterProvider.otherwise('/', function(){
			console.log('invalid route');
		});
	});

})(angular);