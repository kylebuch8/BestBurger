(function() {
	'use strict';

	angular.module(Best.appName).controller('RateCtrl', ['$scope', '$filter', '$routeParams', '$location', 'VenuesSvc', function($scope, $filter, $routeParams, $location, VenuesSvc) {
		$scope.venue = $filter('filter')(VenuesSvc.getVenues(), {
			id : $routeParams.venueId
		})[0];

		$scope.burger = $filter('filter')($scope.venue.burgers, {
			id : $routeParams.burgerId
		})[0];

		$scope.takePicture = function() {
			navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
				quality: 50,
				sourceType: Camera.PictureSourceType.CAMERA,
				destinationType: Camera.DestinationType.FILE_URI
			});
		};

		$scope.getPicture = function() {
			navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
				sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
				destinationType: Camera.DestinationType.FILE_URI
			});
		}

		function onCameraSuccess(imageURI) {
			var image = document.getElementById('image');
			image.style.display = 'block';
			image.src = imageURI;
		}

		function onCameraFail(message) {
			console.log('camera failed: ' + message);
		}

		$scope.submit = function() {
			var rating = VenuesSvc.rateBurger({
				venueId: $scope.venue.id,
				burgerId : $scope.burger.id,
				user: localStorage.getItem(Best.tokenString),
				rating: $scope.rating,
				comments: $scope.comments
			});

			/*
			 * send the user back to the burger page
			 */
			if (rating) {
				$location.path('/venues/' + $scope.venue.id + '/burger/' + $scope.burger.id);
			}
		};
	}]);
})();