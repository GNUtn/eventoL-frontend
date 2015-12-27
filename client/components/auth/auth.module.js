'use strict';

angular.module('eventoLFrontendApp.auth', [
        'eventoLFrontendApp.constants',
        'eventoLFrontendApp.util',
        'ngCookies',
        'ngRoute'
    ])
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
