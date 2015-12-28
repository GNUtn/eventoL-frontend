'use strict';

class NavbarController {

    constructor($scope, $location, $window, Auth) {
        var self            = this;
        this.$location      = $location;
        this.$window        = $window;
        this.isLoggedIn     = Auth.isLoggedIn;
        this.isAdmin        = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        this.navbarClass    = $scope.fixed ? 'small' : 'large';

        this.menu = [{
            'title': 'Home',
            'link' : '/'
        }];

        if(!$scope.fixed) {
            angular.element($window).bind("scroll", function() {
                if(this.pageYOffset > 100) {
                    self.navbarClass = 'small';
                } else {
                    self.navbarClass = 'large';
                }
                $scope.visible = false;
                $scope.$apply();
            });
        }
    }

    isActive(route) {
        return route === this.$location.path();
    }
}

angular.module('eventoLFrontendApp')
    .controller('NavbarController', NavbarController);
