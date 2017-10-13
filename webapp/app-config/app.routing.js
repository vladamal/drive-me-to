
(function() {

    'use strict';

    angular.module("driving-routes")
        .config(["$stateProvider", "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider

                    .state('routes', {
                        url:'/',
                        templateUrl: 'routes/routesView.html',
                        controller: 'routesController',
                        controllerAs: 'vm'
                    })

                    .state('route-details', {
                        url:'/{route:json}',
                        templateUrl: 'routes/routeDetails/routeDetailsView.html',
                        controller: 'routeDetailsController',
                        controllerAs: 'vmDetails',
                        data: { route:null }
                    });

                $urlRouterProvider.otherwise('/');

            }
        ]);
}());