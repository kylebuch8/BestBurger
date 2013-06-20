(function() {
	'use strict';

	angular.module(Best.appName).controller('LoginCtrl', ['$rootScope', '$scope', '$http', '$location', function($rootScope, $scope, $http, $location) {
        storeCredentials();

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

		$scope.openChildBrowser = function(provider) {
			var url = '',
				redirectUri = 'http://bestapi.kristyandkyle.com/users/login/';

			switch (provider) {
				case 'google':
					url = 'https://accounts.google.com/o/oauth2/auth?response_type=token&scope=profile+email&client_id=124967647113.apps.googleusercontent.com&redirect_uri=' + redirectUri;
				break;

				case 'facebook':
					url = 'https://www.facebook.com/dialog/oauth?client_id=212457378769328&redirect_uri=' + redirectUri + '&scope=email&response_type=token';
				break;
			}

			var ref = window.open(url, '_blank', 'location=yes');
			ref.addEventListener('loadstop', function(event) {
				var patt = new RegExp(/http:\/\/bestapi.kristyandkyle.com\/users\/login\/[^;]+access_token=([^"]+)/),
    				result = patt.exec(event.url);

    			console.log('Loading url: ' + event.url);

    			if (result === null) {
    				console.log('no code');
    			} else {
    				/*
    				 * hallelujah! we have a code. now let's save it
    				 */
    				console.log('we have a code');
    				console.log(result[1]);

    				var token = result[1];

    				localStorage.setItem(Best.strings.authProvider, provider);
    				localStorage.setItem(Best.strings.token, token);

    				/*
    				 * close the inappbrowser
    				 */
    				ref.close();

    				/*
    				 * we need to record the authProvider and the user id
    				 * before we do anything else
    				 */

    				console.log("send to profile page");

    				/*
    				 * enable the back button again. this will allow the user to go back to
    				 * the /login screen
    				 */
    				document.removeEventListener('backbutton', $rootScope.exitApp, false);

    				$scope.$apply(function() {
    					$location.path('/profile');
    				});
    			}
			});
		};

        /*
         * store the auth provider and the token in the database and
         * return a user id
         */
        function storeCredentials(provider, token) {
            // http://bestapi.kristyandkyle.com/users/login/#access_token=ya29.AHES6ZSeiHlSP9d0Iq1NKp9wkJWR3bU13n2OKsFrz2mIqMU42qA72z5u&token_type=Bearer&expires_in=3600
            var provider = 'google',
                token = 'ya29.AHES6ZSeiHlSP9d0Iq1NKp9wkJWR3bU13n2OKsFrz2mIqMU42qA72z5u';

            var url = 'http://bestapi/users/storeCredentials',
                data = {
                    authProvider: provider,
                    token: token
                };

            $http
                .post(url, data)
                .success(function(data, status, headers, config) {

                })
                .error(function(data, status, headers, config) {

                });
        }
	}]);
})();