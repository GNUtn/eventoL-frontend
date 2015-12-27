'use strict';

angular.module('eventoLFrontendApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'app/main/main.html',
                controller  : 'MainController',
                controllerAs: 'main'
            });
    });
