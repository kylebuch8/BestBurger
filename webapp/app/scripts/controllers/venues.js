(function() {
	'use strict';

	angular.module(Best.appName).controller('VenuesCtrl', ['$scope', 'FoursquareSvc', function ($scope, FoursquareSvc) {
	    $scope.FoursquareSvc = FoursquareSvc;

	    $scope.$watch('venue', function(newVenue) {
			if(typeof(newVenue) !== 'undefined' && newVenue !== '') {
				FoursquareSvc.suggestVenue(newVenue);
			}
		});

		$scope.$watch('FoursquareSvc.suggest', function(newVenues) {
			if(typeof(newVenues) !== 'undefined') {
				$scope.venues = newVenues;
			}
		});
	  }]);
})();