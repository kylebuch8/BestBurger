(function() {
	angular.module(Best.appName).controller('BurgerCtrl', ['$scope', '$filter', '$routeParams', 'VenuesSvc', function($scope, $filter, $routeParams, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.venueId
		})[0];

		$scope.burger = $filter('filter')($scope.venue.burgers, {
			id : $routeParams.burgerId
		})[0];
	}]);
})();