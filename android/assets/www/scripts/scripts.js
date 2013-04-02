(function(e){"use strict";e.Best={appName:"BestBurger",authProvider:"authProvider",tokenString:"token"},angular.module(Best.appName,[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/rate",{templateUrl:"views/rate.html",controller:"RateCtrl"}).when("/venues",{templateUrl:"views/venues.html",controller:"VenuesCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location",function(e){localStorage.getItem(Best.tokenString)||e.path("/login")}])})(window),function(){"use strict";angular.module(Best.appName).controller("MainCtrl",["$scope",function(e){function t(){"Android"===device.platform&&document.addEventListener("backbutton",o,!1)}function o(){navigator.app.exitApp()}e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],document.addEventListener("deviceready",t,!1)}])}(),function(){"use strict";angular.module(Best.appName).controller("LoginCtrl",["$scope","$location",function(e,t){function o(){"Android"===device.platform&&document.addEventListener("backbutton",n,!1)}function n(){navigator.app.exitApp()}document.addEventListener("deviceready",o,!1),e.openChildBrowser=function(o){var r="";switch(o){case"google":r="https://accounts.google.com/o/oauth2/auth?response_type=token&scope=https://www.googleapis.com/auth/userinfo.profile&client_id=124967647113.apps.googleusercontent.com&redirect_uri=http://www.google.com/";break;case"facebook":r="https://www.facebook.com/dialog/oauth?client_id=212457378769328&redirect_uri=http://www.google.com/&scope=email&response_type=token"}var l=window.open(r,"_blank","location=yes");l.addEventListener("loadstart",function(r){var a=RegExp(/http:\/\/www.google.com\/[^;]+access_token=([^"]+)/),c=a.exec(r.url);if(console.log("Loading url: "+r.url),null===c)console.log("no code");else{console.log("we have a code"),console.log(c[1]);var s=c[1];localStorage.setItem(Best.authProvider,o),localStorage.setItem(Best.tokenString,s),l.close(),console.log("send to profile page"),document.removeEventListener("backbutton",n,!1),e.$apply(function(){t.path("/profile")})}})}}])}(),function(){"use strict";angular.module(Best.appName).controller("ProfileCtrl",["$scope","$http",function(e,t){if("google"===localStorage.getItem(Best.authProvider)){console.log("authProvider is google"),console.log("token is: "+localStorage.getItem(Best.tokenString));var o=localStorage.getItem(Best.tokenString),n="https://www.googleapis.com/oauth2/v1/userinfo?access_token="+o;console.log("url is: "+n),t.get(n).success(function(t){e.name=t.name,e.picture=t.picture}).error(function(){alert("there was a problem")})}if("facebook"===localStorage.getItem(Best.authProvider)){var o=localStorage.getItem(Best.tokenString),n="https://graph.facebook.com/me?fields=picture,id,name,first_name,last_name,email&access_token="+o;console.log("url is: "+n),t.get(n).success(function(t){e.name=t.name,e.picture=t.picture.data.url}).error(function(){alert("there was a problem")})}}])}(),function(){"use strict";angular.module(Best.appName).controller("RateCtrl",["$scope",function(e){e.submit=function(){alert("Burger Rated!")}}])}(),function(){"use strict";angular.module(Best.appName).factory("FoursquareSvc",["$http",function(e){var t={suggestVenue:function(o){console.log("query: "+o),e.get("https://api.foursquare.com/v2/venues/suggestCompletion",{params:{ll:"35.9939,-78.8989",query:o,client_id:"YJO3HB1UU0XLEYPQGE4LJH4MANMFRMEZDUBKTAWXDH0A5V1F",client_secret:"Z3Z114WIR4LXAYEUMV5KLZLYCXNUKDZ2WOOZDOWCBEG2YXIV",v:"20130402"}}).success(function(e){t.suggest=e,console.log(e)}).error(function(e,t,o,n){console.log("there was an error with the foursquare service"),console.log("url: "+n.url),console.log("url: "+n.params)})}};return t}])}(),function(){"use strict";angular.module(Best.appName).controller("VenuesCtrl",["$scope","FoursquareSvc",function(e,t){e.FoursquareSvc=t,e.$watch("venue",function(e){void 0!==e&&""!==e&&t.suggestVenue(e)}),e.$watch("FoursquareSvc.suggest",function(t){void 0!==t&&(e.venues=t)})}])}();