(function() {
	'use strict';

	angular.module(Best.appName).controller('RateCtrl', ['$scope', '$filter', '$routeParams', '$location', 'VenuesSvc', function($scope, $filter, $routeParams, $location, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.venueId
		})[0];

		$scope.burger = $filter('filter')($scope.venue.burgers, {
			id : $routeParams.burgerId
		})[0];

		$scope.submit = function() {
			var rating = VenuesSvc.rateBurger({
				venueId: $scope.venue.id,
				burgerId : $scope.burger.id,
				user: localStorage.getItem(Best.tokenString),
				rating: $scope.rating,
				comments: $scope.comments
			});

			/*
			 * send the user back to the burger page
			 */
			if (rating) {
				$location.path('/venues/' + $scope.venue.id + '/burger/' + $scope.burger.id);
			}
		};
	}]);
})();