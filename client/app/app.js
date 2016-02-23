'use strict';

(function() {

    if(!angular.mock) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['eventoLFrontendApp']);
        });
    }
})();

angular.module('eventoLFrontendApp', [
        'eventoLFrontendApp.auth',
        'eventoLFrontendApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'validation.match',
        'mgo-angular-wizard',
        'angular-img-cropper',
        'multipleDatePicker',
        'ngMap'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
