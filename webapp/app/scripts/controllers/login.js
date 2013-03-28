(function() {
	'use strict';

	angular.module(Best.appName).controller('LoginCtrl', ['$scope', function($scope) {
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

		$scope.openChildBrowser = function(provider) {
			var url = '';

			switch (provider) {
				case 'google':
					url = 'http://www.google.com';
				break;

				case 'facebook':
					url = 'http://www.facebook.com';
				break;
			}

			var ref = window.open(url, '_blank', 'location=no');
			ref.addEventListener('loadstart', function(event) {
				console.log(event.url);
			});
		};
	}]);
})();