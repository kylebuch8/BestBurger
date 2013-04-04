(function() {
	'use strict';

	angular.module(Best.appName).controller('SearchCtrl', ['$rootScope', '$scope', 'FoursquareSvc', function($rootScope, $scope, FoursquareSvc) {
		// remove back button listener if it's there
		document.removeEventListener('backbutton', $rootScope.exitApp, false);

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