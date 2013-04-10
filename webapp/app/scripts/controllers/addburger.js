(function() {
	'use strict';

	angular.module(Best.appName).controller('AddBurgerCtrl', ['$scope', '$routeParams', '$filter', 'VenuesSvc', function($scope, $routeParams, $filter, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.venueId
		})[0];

		$scope.burgerAdded = false;

		$scope.submit = function() {
			var burger = VenuesSvc.addBurger({
				venueId: $scope.venue.id,
				burgerName: $scope.burgerName
			});

			if (burger !== null) {
				$scope.burgerAdded = true;
			}
		}
	}]);
})();