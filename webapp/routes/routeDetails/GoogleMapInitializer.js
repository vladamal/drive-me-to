(function() {

    'use strict';

    angular.module('driving-routes').factory("GoogleMapInitializer", GoogleMapInitializer);

    GoogleMapInitializer.$inject = ['$window', '$q', 'mainConfig'];

    function GoogleMapInitializer($window, $q, mainConfig) {

        var asyncUrl =
                'https://maps.googleapis.com/maps/api/js?key=' +
                mainConfig.GoogleAPIkey
                + '&callback=',
            mapsDefer = $q.defer();

        $window.googleMapsInitialized = mapsDefer.resolve;

        var asyncLoad = function (asyncUrl, callbackName) {
            var script = document.createElement('script');
            script.src = asyncUrl + callbackName;
            document.body.appendChild(script);
        };
        asyncLoad(asyncUrl, 'googleMapsInitialized');

        return {
            mapsInitialized: mapsDefer.promise
        };
    }

})();
