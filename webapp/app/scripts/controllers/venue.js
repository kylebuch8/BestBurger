(function() {
	'use strict';

	angular.module(Best.appName).controller('VenueCtrl', ['$scope', '$routeParams', '$filter', 'VenuesSvc', function($scope, $routeParams, $filter, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.id
		})[0];

		$scope.click = function(id) {
			console.log(id);
		}
	}]);
})();