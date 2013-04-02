(function() {
	'use strict';

	angular.module(Best.appName).controller('RateCtrl', ['$scope', function($scope) {
		$scope.submit = function() {
			alert('Burger Rated!');
		};
	}]);
})();