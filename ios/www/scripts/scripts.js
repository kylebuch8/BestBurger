(function(e){"use strict";e.Best={appName:"BestBurger",tokenString:"token"},angular.module(Best.appName,[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location",function(e){localStorage.getItem(Best.tokenString)||e.path("/login")}])})(window),function(){"use strict";angular.module(Best.appName).controller("MainCtrl",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}(),function(){"use strict";angular.module(Best.appName).controller("LoginCtrl",["$scope",function(e){function t(){"Android"===device.platform&&document.addEventListener("backbutton",o,!1)}function o(){navigator.app.exitApp()}document.addEventListener("deviceready",t,!1),e.openChildBrowser=function(e){var t="";switch(e){case"google":t="http://www.google.com";break;case"facebook":t="http://www.facebook.com"}window.open(t,"_blank","location=yes")}}])}();