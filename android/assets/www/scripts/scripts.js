(function(e){"use strict";e.Best={appName:"BestBurger",strings:{authProvider:"authProvider",token:"token",fullname:"fullname",picture:"picture"}},angular.module(Best.appName,[]).config(["$routeProvider","$compileProvider",function(e,t){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl"}).when("/profile",{templateUrl:"views/profile.html",controller:"ProfileCtrl"}).when("/search",{templateUrl:"views/search.html",controller:"SearchCtrl"}).when("/venues",{templateUrl:"views/venues.html",controller:"VenuesCtrl"}).when("/venues/:venueId",{templateUrl:"views/venue.html",controller:"VenueCtrl"}).when("/venues/:venueId/burger/add",{templateUrl:"views/addburger.html",controller:"AddBurgerCtrl"}).when("/venues/:venueId/burger/:burgerId",{templateUrl:"views/burger.html",controller:"BurgerCtrl"}).when("/venues/:venueId/burger/:burgerId/rate",{templateUrl:"views/rate.html",controller:"RateCtrl"}).when("/rating/:ratingId",{templateUrl:"views/rating.html",controller:"RatingCtrl"}).otherwise({redirectTo:"/"}),t.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/)}]).run(["$rootScope","$location",function(e,t){e.exitApp=function(){navigator.app.exitApp()},localStorage.getItem(Best.strings.token)||t.path("/login")}])})(window),function(){"use strict";angular.module(Best.appName).controller("MainCtrl",["$rootScope","$scope","$location","RatingsSvc",function(e,t,r,n){function a(){"Android"===device.platform&&document.addEventListener("backbutton",e.exitApp,!1)}t.feed=n.getRatings(),t.toggleMenu=function(e){e.preventDefault(),t.menuState="open"===t.menuState?"":"open"},t.viewRating=function(e){r.path("rating/"+e)},document.addEventListener("deviceready",a,!1)}])}(),function(){"use strict";angular.module(Best.appName).controller("LoginCtrl",["$rootScope","$scope","$location",function(e,t,r){function n(){"Android"===device.platform&&document.addEventListener("backbutton",e.exitApp,!1)}document.addEventListener("deviceready",n,!1),t.openChildBrowser=function(n){var a="",o="http://bestapi.kristyandkyle.com/users/login/";switch(n){case"google":a="https://accounts.google.com/o/oauth2/auth?response_type=token&scope=https://www.googleapis.com/auth/userinfo.profile&client_id=124967647113.apps.googleusercontent.com&redirect_uri="+o;break;case"facebook":a="https://www.facebook.com/dialog/oauth?client_id=212457378769328&redirect_uri="+o+"&scope=email&response_type=token"}var u=window.open(a,"_blank","location=yes");u.addEventListener("loadstop",function(a){var o=RegExp(/http:\/\/bestapi.kristyandkyle.com\/users\/login\/[^;]+access_token=([^"]+)/),i=o.exec(a.url);if(alert(a.url),console.log("Loading url: "+a.url),null===i)console.log("no code");else{console.log("we have a code"),console.log(i[1]);var s=i[1];localStorage.setItem(Best.strings.authProvider,n),localStorage.setItem(Best.strings.token,s),u.close(),console.log("send to profile page"),document.removeEventListener("backbutton",e.exitApp,!1),t.$apply(function(){r.path("/profile")})}})}}])}(),function(){"use strict";angular.module(Best.appName).controller("ProfileCtrl",["$scope","$http",function(e,t){function r(t,r){e.name=t,e.picture=r,localStorage.setItem(Best.strings.fullname,t),localStorage.setItem(Best.strings.picture,r)}if("google"===localStorage.getItem(Best.strings.authProvider)){console.log("authProvider is google"),console.log("token is: "+localStorage.getItem(Best.strings.token));var n=localStorage.getItem(Best.strings.token),a="https://www.googleapis.com/oauth2/v1/userinfo?access_token="+n;console.log("url is: "+a),t.get(a).success(function(e){r(e.name,e.picture)}).error(function(){alert("there was a problem")})}if("facebook"===localStorage.getItem(Best.strings.authProvider)){var n=localStorage.getItem(Best.strings.token),a="https://graph.facebook.com/me?fields=picture,id,name,first_name,last_name,email&access_token="+n;console.log("url is: "+a),t.get(a).success(function(e){r(e.name,e.picture.data.url)}).error(function(){alert("there was a problem")})}}])}(),function(){"use strict";angular.module(Best.appName).controller("RateCtrl",["$scope","$filter","$routeParams","$location","VenuesSvc",function(e,t,r,n,a){function o(e){var t=document.getElementById("image");t.style.display="block",t.src=e}function u(e){console.log("camera failed: "+e)}e.venue=t("filter")(a.getVenues(),{id:r.venueId})[0],e.burger=t("filter")(e.venue.burgers,{id:r.burgerId})[0],e.takePicture=function(){navigator.camera.getPicture(o,u,{quality:50,sourceType:Camera.PictureSourceType.CAMERA,destinationType:Camera.DestinationType.FILE_URI})},e.getPicture=function(){navigator.camera.getPicture(o,u,{sourceType:Camera.PictureSourceType.PHOTOLIBRARY,destinationType:Camera.DestinationType.FILE_URI})},e.submit=function(){var t=a.rateBurger({venueId:e.venue.id,burgerId:e.burger.id,user:localStorage.getItem(Best.tokenString),rating:e.rating,comments:e.comments});t&&n.path("/venues/"+e.venue.id+"/burger/"+e.burger.id)}}])}(),function(){"use strict";angular.module(Best.appName).factory("FoursquareSvc",["$http",function(e){function t(t){return console.log("query: "+t),e.get("https://api.foursquare.com/v2/venues/suggestCompletion",{params:{ll:"35.9939,-78.8989",query:t,client_id:"YJO3HB1UU0XLEYPQGE4LJH4MANMFRMEZDUBKTAWXDH0A5V1F",client_secret:"Z3Z114WIR4LXAYEUMV5KLZLYCXNUKDZ2WOOZDOWCBEG2YXIV",v:"20130402"}}).success(function(e){return e}).error(function(e,t,r,n){console.log("there was an error with the foursquare service"),console.log("url: "+n.url),console.log("url: "+n.params)})}return{suggestVenue:t}}])}(),function(){"use strict";angular.module(Best.appName).factory("VenuesSvc",function(){function e(e){for(var t=0,n=r.length;n>t;t+=1)if(r[t].id===e.venueId)return r[t].burgers.push({id:Math.floor(1e5*Math.random()),name:e.burgerName}),r[t].burgers[r[t].burgers.length-1]}function t(e){for(var t=0,n=r.length;n>t;t+=1)if(r[t].id===e.venueId)for(var a=r[t],o=0,u=a.burgers.length;u>o;o+=1)if(a.burgers[o].id===e.burgerId){var i=a.burgers[o],s={user:e.user,rating:e.rating,comments:e.comments};return i.ratings.push(s),i.totalRatings+=1,s}}var r=[{id:1,name:"City Beverage",burgers:[{id:1,name:"The Heartattack",totalRatings:0,avgRating:0,ratings:[]},{id:2,name:"The Meat Monster",totalRatings:1,avgRating:5,ratings:[{id:2,user:{name:"Kyle Buchanan"},rating:5,comments:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, blanditiis neque sit dolorum recusandae suscipit cumque incidunt libero animi voluptatem quasi earum beatae sunt nam doloremque nostrum culpa quas quod.",createDate:"1/1/2013"}]}]},{id:2,name:"Bull McCabe's",burgers:[{id:3,name:"The Irish Burger",totalRatings:0,avgRating:0,ratings:[]},{id:4,name:"Fried Egg Burger",totalRatings:0,avgRating:0,ratings:[]}]}];return{getVenues:function(){return r},getVenue:function(){},addBurger:e,rateBurger:t}})}(),function(){"use strict";angular.module(Best.appName).controller("SearchCtrl",["$rootScope","$scope","FoursquareSvc",function(e,t,r){document.removeEventListener("backbutton",e.exitApp,!1),t.$watch("venue",function(e,t,n){void 0!==e&&""!==e&&r.suggestVenue(e).success(function(e){n.venues=e})})}])}(),function(){"use strict";angular.module(Best.appName).controller("VenuesCtrl",["$rootScope","$scope","$location","VenuesSvc",function(e,t,r,n){function a(e){console.log(e)}function o(e){console.log(e)}document.removeEventListener("backbutton",e.exitApp,!1),t.venues=n.getVenues(),t.click=function(e){r.path("/venues/"+e)},navigator.geolocation.getCurrentPosition(a,o)}])}(),function(){"use strict";angular.module(Best.appName).controller("VenueCtrl",["$scope","$routeParams","$filter","$location","VenuesSvc",function(e,t,r,n,a){e.venue=r("filter")(a.getVenues(),{id:t.venueId})[0],e.click=function(e){n.path(n.path()+"/burger/"+e)}}])}(),function(){"use strict";angular.module(Best.appName).controller("AddBurgerCtrl",["$scope","$routeParams","$filter","VenuesSvc",function(e,t,r,n){e.venue=r("filter")(n.getVenues(),{id:t.venueId})[0],e.burgerAdded=!1,e.submit=function(){var t=n.addBurger({venueId:e.venue.id,burgerName:e.burgerName});null!==t&&(e.burgerAdded=!0)}}])}(),function(){angular.module(Best.appName).controller("BurgerCtrl",["$scope","$filter","$routeParams","VenuesSvc",function(e,t,r,n){e.venue=t("filter")(n.getVenues(),{id:r.venueId})[0],e.burger=t("filter")(e.venue.burgers,{id:r.burgerId})[0]}])}(),function(){"use strict";angular.module(Best.appName).factory("RatingsSvc",["$filter",function(e){function t(){var e=[{id:1,user:{name:"Kyle Buchanan"},rating:5,burger:{name:"The Heartattack"},venue:{name:"City Beverage"},createDate:"April 16th, 2013"},{id:2,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:3,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:4,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:5,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:6,user:{name:"Kyle Buchanan"},rating:5,burger:{name:"The Heartattack"},venue:{name:"City Beverage"},createDate:"April 16th, 2013"},{id:7,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:8,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:9,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:10,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:11,user:{name:"Kyle Buchanan"},rating:5,burger:{name:"The Heartattack"},venue:{name:"City Beverage"},createDate:"April 16th, 2013"},{id:12,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:13,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:14,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"},{id:15,user:{name:"Luke Dary"},rating:4,burger:{name:"The Meat Monster"},venue:{name:"Bull McCabes"},createDate:"April 15th, 2013"}];return e}function r(t){var r=n.getRatings(),a=e("filter")(r,function(e){return e.id==t?e:void 0});return a[0]}var n={getRatings:t,getRating:r};return n}])}(),function(){"use strict";angular.module(Best.appName).controller("RatingCtrl",["$scope","$routeParams","RatingsSvc",function(e,t,r){e.rating=r.getRating(t.ratingId)}])}();