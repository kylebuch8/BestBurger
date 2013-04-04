(function() {
	'use strict';

	angular.module(Best.appName).controller('VenuesCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.venues = [
			{
				id: 1,
				name: 'City Beverage',
				burgers: [
					{
						name: 'The Heartattack'
					},
					{
						name: 'The Meat Monster'
					}
				]
			},
			{
				id: 2,
				name: 'Bull McCabe\'s',
				burgers: [
					{
						name: 'The Irish Burger'
					},
					{
						name: 'Fried Egg Burger'
					}
				]
			}
		];

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