
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
                    });

                $urlRouterProvider.otherwise('/');

            }
        ]);
}());