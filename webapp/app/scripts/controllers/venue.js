(function() {
	'use strict';

	angular.module(Best.appName).controller('VenueCtrl', ['$scope', '$routeParams', '$filter', '$location', 'VenuesSvc', function($scope, $routeParams, $filter, $location, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.venueId
		})[0];

		$scope.click = function(id) {
			$location.path($location.path() + '/burger/' + id);
		}
	}]);
})();