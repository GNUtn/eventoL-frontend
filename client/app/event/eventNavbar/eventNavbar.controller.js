'use strict';

class EventNavbarController {

    constructor($location, $routeParams, Auth, eventService) {
        var self            = this;
        this.$location      = $location;
        this.isLoggedIn     = Auth.isLoggedIn;
        this.isAdmin        = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
        eventService.getEvent($routeParams.eventId)
            .then(function(response) {
                self.event = response.data;
            });
    }

    isActive(route) {
        return route === this.$location.path();
    }
}

angular.module('eventoLFrontendApp')
    .controller('EventNavbarController', EventNavbarController);
