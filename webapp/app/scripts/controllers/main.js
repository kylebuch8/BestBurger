(function() {
	'use strict';

	angular.module(Best.appName).controller('MainCtrl', ['$scope', 'FoursquareSvc', function($scope, FoursquareSvc) {
		$scope.FoursquareSvc = FoursquareSvc;
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

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

		document.addEventListener('deviceready', onDeviceReady, false);

		function onDeviceReady() {
			/*
			 * if the user has made it to this screen and they hit the back button,
			 * we'll need to take the user out of the application
			 */
			if (device.platform === 'Android') {
				document.addEventListener('backbutton', onBackKeyDown, false);
			}
		};

		function onBackKeyDown() {
			navigator.app.exitApp();
		};
	}]);
})();