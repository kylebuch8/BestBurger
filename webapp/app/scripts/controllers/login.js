(function() {
	'use strict';

	angular.module(Best.appName).controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
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
					url = 'https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile&client_id=124967647113.apps.googleusercontent.com&redirect_uri=http://google.com/';
				break;

				case 'facebook':
					url = 'https://www.facebook.com/dialog/oauth?client_id=212457378769328&redirect_uri=http://www.google.com/&scope=email&response_type=token';
				break;
			}

			var ref = window.open(url, '_blank', 'location=yes');
			ref.addEventListener('loadstart', function(event) {
				var patt = (provider === 'google') ? new RegExp(/http:\/\/www.google.com\/[^;]+code=([^"]+)/) : new RegExp(/http:\/\/www.google.com\/[^;]+access_token=([^"]+)/),
    				result = patt.exec(event.url);

    			console.log('Loading url: ' + event.url);

    			if (result === null) {
    				console.log('no code');
    			} else {
    				console.log('we have a code');
    				console.log(result[1]);
    				alert(result[1]);
    				ref.close();

    				console.log("send to profile page");
    				document.removeEventListener('backbutton', onBackKeyDown, false);

    				$scope.$apply(function() {
    					$location.path('/profile');
    				});
    			}
			});
		};
	}]);
})();