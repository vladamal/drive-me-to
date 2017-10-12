(function() {

    'use strict';

    angular.module('driving-routes').controller("routeDetailsController", routeDetailsController);

    routeDetailsController.$inject = ['$stateParams', 'GoogleMapInitializer'];

    function routeDetailsController($stateParams, GoogleMapInitializer) {

        var vmDetails = this;

        init();
        function init(){
            vmDetails.route = $stateParams.route;
            vmDetails.index = $stateParams.route.index;
        }

        var map;
        GoogleMapInitializer.mapsInitialized
            .then(function(res){
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 45.253980, lng: 19.840815},
                    zoom: 8
                });
        })

    }

}());
