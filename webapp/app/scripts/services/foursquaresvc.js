(function() {
	'use strict';

	angular.module(Best.appName).factory('FoursquareSvc', ['$http', function($http) {
		var apiKey = 'FEYJGHDYEHCXEYLBDIYCFGUPKKETNIEIHDEJOBR0ZIYVGE3I',
			FoursquareSvc = {
				suggestVenue: function(query) {
					$http.get(
						'https://api.foursquare.com/v2/venues/suggestcompletion',
						{
							lat: 35.9939, lng: 78.8989,
							query: 'query',
							oauth_token: 'FEYJGHDYEHCXEYLBDIYCFGUPKKETNIEIHDEJOBR0ZIYVGE3I'
						}
					).success(function(data, status) {
						alert('Boo');
						FoursquareSvc.suggest = data;
						//console.log(data);
					})
				}

			};

		return FoursquareSvc;
	}]);

})();