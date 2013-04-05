(function(window) {
    'use strict';

    window.Best = {
        appName : 'BestBurger',
        authProvider : 'authProvider',
        tokenString : 'token',
    };

    angular.module(Best.appName, [])
        .config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
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
                .when('/rate', {
                    templateUrl: 'views/rate.html',
                    controller: 'RateCtrl'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchCtrl'
                })
                .when('/venues', {
                    templateUrl: 'views/venues.html',
                    controller: 'VenuesCtrl'
                })
                .when('/venues/:venueId', {
                    templateUrl: 'views/venue.html',
                    controller: 'VenueCtrl'
                })
                .when('/venues/:venueId/burgers/add', {
                    templateUrl: 'views/addburger.html',
                    controller: 'AddBurgerCtrl'
                })
                .otherwise({
                    redirectTo : '/'
                });

            $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        }])
        .run(['$rootScope', '$location', function($rootScope, $location) {
            /*
             * this is for android
             *
             * rather than creating an exit app function in each module that we'll
             * need to exit the app from, this will allow us to use the same
             * function globally
             */
            $rootScope.exitApp = function() {
                navigator.app.exitApp();
            };

            if (!localStorage.getItem(Best.tokenString)) {
                $location.path('/login');
            }
        }]);
})(window);