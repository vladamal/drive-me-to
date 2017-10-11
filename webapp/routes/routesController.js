(function() {

    'use strict';

    angular.module('driving-routes').controller("routesController", routesController);

    routesController.$inject = [];

    function routesController() {

        var vm = this;

        vm.newRoute = {};
        vm.routes = [];

        vm.addRoute = function(route){
            vm.routes.push(route);
            vm.newRoute = {};
        };

        vm.removeRoute = function(idx){
            vm.routes.splice(idx, 1);
            vm.newRoute = {};
        };

    }

}());
