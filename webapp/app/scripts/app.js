(function(window) {
    'use strict';

    window.Best = {
        appName : 'BestBurger',
        authProvider : 'authProvider',
        tokenString : 'token',
    };

    angular.module(Best.appName, [])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl : 'views/main.html',
                    controller : 'MainCtrl'
                })
                .when('/login', {
                  templateUrl: 'views/login.html',
                  controller: 'LoginCtrl'
                })
                .when('/profile', {
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileCtrl'
                })
                .otherwise({
                    redirectTo : '/'
                });
        }])
        .run(['$location', function($location) {
            if (!localStorage.getItem(Best.tokenString)) {
                $location.path('/login');
            }
        }]);
})(window);