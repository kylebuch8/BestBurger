(function() {
	'use strict';

	angular.module(Best.appName).controller('NavCtrl', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams) {
		$scope.id = $routeParams.id;
		console.log($routeParams);
	}]);
})();