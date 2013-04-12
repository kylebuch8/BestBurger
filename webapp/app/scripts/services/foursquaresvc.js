(function() {
	'use strict';

	angular.module(Best.appName).factory('FoursquareSvc', ['$http', function($http) {
		//var apiKey = 'L2GT4SLIOUBVC3Q1CSC4TTVPUHPQMRZWHWIPILYGZKBKFBTY',
		
		function suggestVenue(query) {
			console.log("query: " + query);

			return $http.get(
				'https://api.foursquare.com/v2/venues/suggestCompletion', {
					params : {
						ll : '35.9939,-78.8989',
						query : query,
						client_id : 'YJO3HB1UU0XLEYPQGE4LJH4MANMFRMEZDUBKTAWXDH0A5V1F',
						client_secret : 'Z3Z114WIR4LXAYEUMV5KLZLYCXNUKDZ2WOOZDOWCBEG2YXIV',
						v : '20130402'
					}
				})
				.success(function(data, status) {
					return data;
				}).error(function(data, status, headers, config) {
					console.log('there was an error with the foursquare service');
					console.log('url: ' + config.url);
					console.log('url: ' + config.params);
				});
		}

		return {
			suggestVenue: suggestVenue
		};
	}]);

})();