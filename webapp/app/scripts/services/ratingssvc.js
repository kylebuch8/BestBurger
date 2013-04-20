/*
 * we should use a database to store all of these items
 */
(function() {
    'use strict';

    angular.module(Best.appName).factory('RatingsSvc', [function() {
        var RatingsSvc = {
            getRatings: getRatings
        };

        function getRatings() {
            var ratings = [
                {
                    id: 1,
                    user: {
                        name: 'Kyle Buchanan'
                    },
                    rating: 5,
                    burger: {
                        name: 'The Heartattack'
                    },
                    venue: {
                        name: 'City Beverage'
                    },
                    createDate: 'April 16th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 3,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 4,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 1,
                    user: {
                        name: 'Kyle Buchanan'
                    },
                    rating: 5,
                    burger: {
                        name: 'The Heartattack'
                    },
                    venue: {
                        name: 'City Beverage'
                    },
                    createDate: 'April 16th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 3,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 4,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 1,
                    user: {
                        name: 'Kyle Buchanan'
                    },
                    rating: 5,
                    burger: {
                        name: 'The Heartattack'
                    },
                    venue: {
                        name: 'City Beverage'
                    },
                    createDate: 'April 16th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 3,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 4,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                },
                {
                    id: 2,
                    user: {
                        name: 'Luke Dary'
                    },
                    rating: 4,
                    burger: {
                        name: 'The Meat Monster'
                    },
                    venue: {
                        name: 'Bull McCabe\s'
                    },
                    createDate: 'April 15th, 2013'
                }
            ];

            return ratings;
        }

        return RatingsSvc;
    }]);
})();