
(function(){

    'use strict';

    angular.module('driving-routes').factory( 'routesService', routesService );

    routesService.$inject = ['localStorageService'];

    function routesService(localStorageService){

        return {
            getRoutes    : getRoutes,
            updateRoutes : updateRoutes
        };

        function getRoutes() {
            return localStorageService.get('routes');
        }

        function updateRoutes(routes) {
            return localStorageService.set('routes', routes);
        }

    }
}());