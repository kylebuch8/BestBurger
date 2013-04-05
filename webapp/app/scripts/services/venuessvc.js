(function() {
    'use strict';

    angular.module(Best.appName).factory('VenuesSvc', function() {
        var venues = [
            {
                id: 1,
                name: 'City Beverage',
                burgers: [
                    {
                        id: 1,
                        name: 'The Heartattack'
                    },
                    {
                        id: 2,
                        name: 'The Meat Monster'
                    }
                ]
            },
            {
                id: 2,
                name: 'Bull McCabe\'s',
                burgers: [
                    {
                        id: 3,
                        name: 'The Irish Burger'
                    },
                    {
                        id: 4,
                        name: 'Fried Egg Burger'
                    }
                ]
            }
        ];

        return {
            getVenues: function() {
                return venues;
            },

            getVenue: function(id) {
                //return venues[index];
            }
        };
    });
})();