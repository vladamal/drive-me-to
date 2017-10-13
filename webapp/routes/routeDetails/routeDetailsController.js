(function() {

    'use strict';

    angular.module('driving-routes').controller("routeDetailsController", routeDetailsController);

    routeDetailsController.$inject = ['$scope', '$stateParams', 'GoogleMapInitializer', 'toastr'];

    function routeDetailsController($scope, $stateParams, GoogleMapInitializer, toastr) {

        init();
        function init(){
            $scope.route = $stateParams.route;
            $scope.index = $stateParams.route.index;
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
                    origin: $scope.route.start,
                    destination: $scope.route.end,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        var distanceInMeters = response.routes[0].legs[0].distance.value;
                        $scope.distance = distanceInMeters/1000;

                        var timeInSeconds = response.routes[0].legs[0].duration.value;
                        $scope.hours = Math.floor(timeInSeconds/3600);
                        $scope.minutes = Math.round(timeInSeconds/60 - $scope.hours*60);

                        directionsDisplay.setDirections(response);
                        $scope.$apply();
                    } else {
                        toastr.warning('Route is not recognized.', 'Notification.');
                    }
                });

        });

    }

}());
