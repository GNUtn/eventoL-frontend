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
        'validation.match'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
