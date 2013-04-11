(function() {
	'use strict';

	angular.module(Best.appName).controller('SearchCtrl', ['$rootScope', '$scope', 'FoursquareSvc', function($rootScope, $scope, FoursquareSvc) {
		// remove back button listener if it's there
		document.removeEventListener('backbutton', $rootScope.exitApp, false);

	    $scope.$watch('venue', function(newVenue, oldValue, scope) {
			if(typeof(newVenue) !== 'undefined' && newVenue !== '') {
				FoursquareSvc.suggestVenue(newVenue).success(function(data) {
					scope.venues = data;
				});
			}
		});
	  }]);
})();