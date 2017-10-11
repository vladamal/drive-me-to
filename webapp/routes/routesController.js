(function() {

    'use strict';

    angular.module('driving-routes').controller("routesController", routesController);

    routesController.$inject = ['routesService', '$state'];

    function routesController(routesService, $state) {

        var vm = this;

        vm.newRoute = {};
        vm.routes = [];

        init();
        function init(){
            vm.routes = routesService.getRoutes();
            if (vm.routes == null) {
                vm.routes = [];
            }
        }

        vm.addRoute = function(route){
            vm.routes.push(route);
            vm.newRoute = {};
            routesService.updateRoutes(vm.routes);
        };

        vm.removeRoute = function(idx){
            vm.routes.splice(idx, 1);
            routesService.updateRoutes(vm.routes);
        };

        vm.viewRoute = function(route, idx){
            route.index = idx;
            $state.go('route-details', {route:route});
        };

    }

}());
