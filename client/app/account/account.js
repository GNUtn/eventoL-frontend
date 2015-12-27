'use strict';

angular.module('eventoLFrontendApp')
    .config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl : 'app/account/login/login.html',
                controller  : 'LoginController',
                controllerAs: 'auth'
            })
            .when('/logout', {
                name      : 'logout',
                referrer  : '/',
                template  : '',
                controller: function($location, $route, Auth) {
                    var referrer = $route.current.params.referrer ||
                                   $route.current.referrer ||
                                   '/';
                    Auth.logout();
                    $location.path(referrer);
                }
            })
            .when('/signup', {
                templateUrl : 'app/account/signup/signup.html',
                controller  : 'SignupController',
                controllerAs: 'auth'
            });
    })
    .run(function($rootScope) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if(next.name === 'logout' && current && current.originalPath && !current.authenticate) {
                next.referrer = current.originalPath;
            }
        });
    });
