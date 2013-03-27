(function() {
	"use strict";

	angular.module(Best.appName).controller("LoginCtrl", ["$scope", function($scope) {
		document.addEventListener("deviceready", onDeviceReady, false);

		function onDeviceReady() {
			console.log("ready!");
		};
	}]);
})();