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
                        name: 'The Heartattack',
                        ratings: []
                    },
                    {
                        id: 2,
                        name: 'The Meat Monster',
                        ratings: []
                    }
                ]
            },
            {
                id: 2,
                name: 'Bull McCabe\'s',
                burgers: [
                    {
                        id: 3,
                        name: 'The Irish Burger',
                        ratings: []
                    },
                    {
                        id: 4,
                        name: 'Fried Egg Burger',
                        ratings: []
                    }
                ]
            }
        ];

        function addBurger(burger) {
            /*
             * this is a fake way to add a burger. we'll need to actually
             * post this to the server and get a burger id back
             */
            for (var i = 0, length = venues.length; i < length; i += 1) {
                if (venues[i].id === burger.venueId) {
                    venues[i].burgers.push({
                        id: Math.floor(Math.random() * 100000),
                        name: burger.burgerName
                    });

                    return venues[i].burgers[venues[i].burgers.length - 1];
                }
            }
        }

        function rateBurger(rating) {
            /*
             * this is a fake way to rate a burger. we'll need to actually
             * post this to the server and get a rating id back
             */

            /*
             * first find the venue, then find the burger. we also need the
             * user id. for now, we'll just take the token
             */
            for (var i = 0, venuesLength = venues.length; i < venuesLength; i += 1) {
                if (venues[i].id === rating.venueId) {
                    var venue = venues[i];

                    /*
                     * we've found the venue, let's find the burger
                     */
                    for (var j = 0, burgersLength = venue.burgers.length; j < burgersLength; j += 1) {
                        if (venue.burgers[j].id === rating.burgerId) {
                            var burger = venue.burgers[j];

                            /*
                             * we've found the burger. let's add a rating
                             */
                            var ratingObj = {
                                user: rating.user,
                                rating: rating.rating,
                                comments: rating.comments
                            };

                            burger.ratings.push(ratingObj);

                            return ratingObj;
                        }
                    }
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

            addBurger: addBurger,
            
            rateBurger: rateBurger
        };
    });
})();