(function() {
	'use strict';

	angular.module(Best.appName).controller('NavCtrl', ['$rootScope', '$scope', '$location', '$route', function($rootScope, $scope, $location, $route) {
		$scope.id = $location.path().substring(1);
		$scope.isRoot = $scope.id ==='home' || $scope.id === 'profile' || $scope.id === 'venues';
		console.log($route);

		$scope.navClass = function(page) {
			var current = $location.path().substring(1) || 'home';
        	return page === current ? 'active' : '';
		}

		$scope.goBack = function() {
			window.history.back();
		}
	}]);
})();