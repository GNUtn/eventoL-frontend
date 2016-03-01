'use strict';

angular.module('eventoLFrontendApp')
    .directive('eventNavbar', function() {
        return {
            templateUrl : 'app/event/eventNavbar/eventNavbar.html',
            restrict    : 'E',
            controller  : 'EventNavbarController',
            controllerAs: 'eventNabvar'
        };
    });
