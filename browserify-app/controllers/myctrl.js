"use strict";

module.exports = function($scope, MyService, MyFactory, MyProvider){
	$scope.msg = MyService.message();
	$scope.factoryMsg = MyFactory.message();
	$scope.providerMsg = MyProvider.message();
}
