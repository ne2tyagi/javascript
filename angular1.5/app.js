(function(){
'use strict';

angular.module('TestApp',['ngRoute'])
	.constant('SampleConst',"Sample constant accessible in config phase.")
	.service('SimpleServ', function(){
		this.message = function(){
			return "Sample message from service";
		}
	})
	.factory("SimpleFact", function(){

		var obj = {};
		obj.message = function(){
			return "Sample message from factory.";
		}
		return obj;
	})
	.provider('SimpleProv', function(){
		var name = "";
		this.setName = function(nam){
			name = nam;
		}
		this.$get = function(){
			return {
				message: function(){
					return "Sample message from provider. "+ name;
				}
			}
		}
	})
	
	.controller('MainCtrl', function($scope, SimpleServ, SimpleFact, SimpleProv, $injector){
		$scope.fromService = SimpleServ.message();
		$scope.fromFactory = SimpleFact.message();
		$scope.fromProvider = SimpleProv.message();

		//injecting a service dynamically
		$scope.$filter = $injector.get('$filter');
		console.log( $scope.$filter('date')(new Date(), 'dd/mm/yyyy'));

		//get dependencies from a controller
		console.log($injector.annotate(['$scope',function($scope){this.a=111;}]));

		//$injector.invoke example
		$injector.invoke(function(SimpleServ, localvar,s){
			console.log(SimpleServ,'SimpleServ');
			console.log(this,'this');
			console.log(localvar,'localvars',s)
		},{thisvar:632},{localvar:123333,s:"test"});


		//$inject.instantiate example, its used when a more number of parameters to be passed to constructor
		function Car(Name, Model){
			this.name = Name;
			this.model = Model;
		}
		var hundai = $injector.instantiate(Car,{
			Name: 'Hyundai',
			Model: 2017
		});
		console.log(hundai);
		
	})
	.controller('SampleCtrl', function($scope){
		console.log('SampleCtrl')
	})
	.config(function(SimpleProvProvider, $routeProvider, SampleConst,){
		SimpleProvProvider.setName("valueChangedInConfigPhase");
		console.log('from config phase', SampleConst);
		$routeProvider.when('/testpage',{
			templateUrl:"sample.html",
			controller: "SampleCtrl"
		}).otherwise({'redirectTo':'/'});
	})
	.run(function($templateCache){
		console.log('from run phase');
		$templateCache.put('sample.html',"<p> Sample page content");
	});

})(angular);