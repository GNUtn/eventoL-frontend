'use strict';

angular.module('eventoLFrontendApp')
    .controller('ActivityScheduleCtrl', function($routeParams, eventService) {
        var self = this;

        eventService.getEvent($routeParams.eventId)
            .then(function(response) {
                self.event = response.data;
            })
    });




