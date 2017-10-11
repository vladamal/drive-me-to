(function() {

    'use strict';

    angular.module('driving-routes').controller("routeDetailsController", routeDetailsController);

    routeDetailsController.$inject = ['$stateParams'];

    function routeDetailsController($stateParams) {

        var vmDetails = this;

        init();
        function init(){
            vmDetails.route = $stateParams.route;
            vmDetails.index = $stateParams.route.index;
        }


    }

}());
