'use strict';

(function() {

    if(!angular.mock) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['eventoLFrontendApp']);
        });
    }
})();

angular.module('eventoLFrontendApp', [
        'ngAria',
        'ngTouch',
        'ngAnimate',
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
        'ngMap',
        'textAngular',
        'ui.grid',
        'ui.grid.exporter',
        'ui.grid.selection',
        'ui.grid.resizeColumns',
        'ui.grid.moveColumns',
        'ui.grid.autoResize'
    ])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
