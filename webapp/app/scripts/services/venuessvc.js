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

        function addBurger(burgerObj) {
            /*
             * this is a fake way to add a burger. we'll need to actually
             * post this to the server and get a burger id back
             */
            for (var i = 0, length = venues.length; i < length; i += 1) {
                if (venues[i].id === burgerObj.venueId) {
                    venues[i].burgers.push({
                        id: Math.floor(Math.random() * 100000),
                        name: burgerObj.burgerName
                    });

                    return venues[i].burgers[venues[i].burgers.length - 1];
                }
            }
        }

        return {
            getVenues: function() {
                return venues;
            },

            getVenue: function(id) {
                //return venues[index];
            },

            addBurger: addBurger
        };
    });
})();