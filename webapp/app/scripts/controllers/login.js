(function() {
	"use strict";

	angular.module(Best.appName).controller("LoginCtrl", ["$scope", function($scope) {
		document.addEventListener("deviceready", onDeviceReady, false);

		function onDeviceReady() {
			if (device.platform === "Android") {
				document.addEventListener("backbutton", onBackKeyDown, false);
			}
		};

		function onBackKeyDown() {
			navigator.app.exitApp();
		}
	}]);
})();