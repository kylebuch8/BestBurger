(function(window) {
    "use strict";

    window.BestBurger = {
        appName : "BestBurger"
    };

    angular.module(BestBurger.appName, [])
        .config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl : "views/main.html",
                    controller : "MainCtrl"
                })
                .otherwise({
                    redirectTo : "/"
                });
    });
})(window);