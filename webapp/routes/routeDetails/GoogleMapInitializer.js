angular.module('driving-routes')
    .factory('GoogleMapInitializer', function($window, $q){

        var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC6ZWmhfToW-3W_gHyXcHKXqbd1nNscznQ&callback=',
            mapsDefer = $q.defer();

        $window.googleMapsInitialized = mapsDefer.resolve;

        var asyncLoad = function(asyncUrl, callbackName) {
            var script = document.createElement('script');
            script.src = asyncUrl + callbackName;
            document.body.appendChild(script);
        };
        asyncLoad(asyncUrl, 'googleMapsInitialized');

        return {
            mapsInitialized : mapsDefer.promise
        };
    });