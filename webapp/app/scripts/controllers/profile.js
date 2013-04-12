(function() {
	'use strict';

	angular.module(Best.appName).controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {
		/*
		 * theoretically the user should have a authProvider and token in local storage.
		 * using the authProvider, we can tell which endpoint to hit to get basic
		 * profile information about the user
		 *
		 * if the authProvider is google, we can use the following endpoint to retrieve info
		 * https://www.googleapis.com/oauth2/v1/userinfo?access_token={accessToken}
		 */

		if (localStorage.getItem(Best.strings.authProvider) === 'google') {
			console.log('authProvider is google');
			console.log('token is: ' + localStorage.getItem(Best.strings.token));

			var token = localStorage.getItem(Best.strings.token),
				url = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + token;

			console.log('url is: ' + url);

			$http
				.get(url)
				.success(function(data) {
					successHandler(data.name, data.picture);
				})
				.error(function() {
					alert('there was a problem');
				});
		}

		if (localStorage.getItem(Best.strings.authProvider) === 'facebook') {
			var token = localStorage.getItem(Best.strings.token),
				url = 'https://graph.facebook.com/me?fields=picture,id,name,first_name,last_name,email&access_token=' + token;

			console.log('url is: ' + url);

			$http
				.get(url)
				.success(function(data) {
					successHandler(data.name, data.picture.data.url);
				})
				.error(function() {
					alert('there was a problem');
				});
		}

		function successHandler(name, picture) {
			$scope.name = name;
			$scope.picture = picture;

			localStorage.setItem(Best.strings.fullname, name);
			localStorage.setItem(Best.strings.picture, picture);
		}
	}]);
})();