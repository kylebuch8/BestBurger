(function() {
	'use strict';

	angular.module(Best.appName).controller('VenuesCtrl', ['$rootScope', '$scope', '$location', 'VenuesSvc', function($rootScope, $scope, $location, VenuesSvc) {
		// remove back button listener if it's there
		document.removeEventListener('backbutton', $rootScope.exitApp, false);

		$scope.venues = VenuesSvc.getVenues();

		$scope.click = function(id) {
			$location.path('/venues/' + id);
		}

		/*
		 * get the user's location and bring back venues that we have
		 * in our data base that are close to the user
		 */
		navigator.geolocation.getCurrentPosition(onSuccess, onError);

		function onSuccess(position) {
			console.log(position);
		}

		function onError(error) {
			console.log(error);
		}
	}]);
})();