/*
 * we should use a database to store all of these items
 */
(function() {
    'use strict';

    angular.module(Best.appName).factory('RatingsSvc', ['$filter', function($filter) {
        var RatingsSvc = {
            getRatings: getRatings,
            getRating: getRating
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
                    id: 5,
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
                    id: 6,
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
                    id: 7,
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
                    id: 8,
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
                    id: 9,
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
                    id: 10,
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
                    id: 11,
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
                    id: 12,
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
                    id: 13,
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
                    id: 14,
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
                    id: 15,
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

        function getRating(id) {
            var ratings = RatingsSvc.getRatings(),
                rating = $filter('filter')(ratings, function(rating) {
                    if (rating.id == id) {
                        return rating;
                    }
                });

            return rating[0];
        }

        return RatingsSvc;
    }]);
})();