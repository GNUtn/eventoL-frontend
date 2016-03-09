'use strict';

angular.module('eventoLFrontendApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl : 'app/event/create/create.html',
                controller  : 'CreateEventCtrl',
                controllerAs: 'createEvent'
            })
            .when('/event/:eventId', {
                templateUrl : 'app/event/home/home.html',
                controller  : 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/event/:eventId/admin', {
                templateUrl : 'app/event/admin/admin.html',
                controller  : 'AdminCtrl',
                controllerAs: 'admin'
            });
    });
