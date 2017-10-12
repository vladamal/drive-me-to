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
            .then(function(){

                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();

                var myOptions = {
                    zoom:7,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                map = new google.maps.Map(document.getElementById("map"), myOptions);
                directionsDisplay.setMap(map);

                var request = {
                    origin: 'novi sad',
                    destination: 'london',
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {

                        var distanceInMeters = response.routes[0].legs[0].distance.value;
                        var distance = distanceInMeters/1000;
                        console.log(distance + " km.");

                        var timeInSeconds = response.routes[0].legs[0].duration.value;
                        var hours = Math.floor(timeInSeconds/3600);
                        var minutes = timeInSeconds - hours*60;
                        console.log("About " + hours + " hours and " + minutes + " minutes.");

                        directionsDisplay.setDirections(response);
                    }
                });

        });

    }

}());
