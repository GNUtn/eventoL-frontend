'use strict';

angular.module('eventoLFrontendApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl : 'app/event/create/create.html',
                controller  : 'CreateEventCtrl',
                controllerAs: 'createEvent'
            })
    });
