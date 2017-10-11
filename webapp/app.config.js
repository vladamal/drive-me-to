
(function () {

    'use strict';

    angular.module('driving-routes').config(config);

    config.$inject = ['localStorageServiceProvider'];

    function config(localStorageServiceProvider){

        localStorageServiceProvider
            .setPrefix('driving');

    }

}());