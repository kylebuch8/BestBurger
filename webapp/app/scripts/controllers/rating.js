(function() {
	'use strict';

	angular.module(Best.appName).controller('RatingCtrl', ['$scope', '$routeParams', 'RatingsSvc', function($scope, $routeParams, RatingsSvc) {
		$scope.rating = RatingsSvc.getRating($routeParams.ratingId);
	}]);
})();