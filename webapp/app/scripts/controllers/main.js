(function() {
	'use strict';

	angular.module(Best.appName).controller('MainCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		document.addEventListener('deviceready', onDeviceReady, false);

		function onDeviceReady() {
			/*
			 * if the user has made it to this screen and they hit the back button,
			 * we'll need to take the user out of the application
			 */
			if (device.platform === 'Android') {
				document.addEventListener('backbutton', $rootScope.exitApp, false);
			}
		};
	}]);
})();