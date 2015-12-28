'use strict';

angular.module('eventoLFrontendApp')
    .directive('navbar', () => ({
        templateUrl : 'components/navbar/navbar.html',
        restrict    : 'E',
        controller  : 'NavbarController',
        scope       : {
            fixed: '=fixed'
        },
        controllerAs: 'nav'
    }));
