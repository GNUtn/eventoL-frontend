'use strict';

angular.module('eventoLFrontendApp')
    .controller('HomeCtrl', function($routeParams, eventService) {
        var self = this;

        eventService.getEvent($routeParams.eventId)
            .then(function(response) {
                self.event = response.data;
            })
            .then(function() {
                self.event_date = moment(self.event.dates[0]).format('LL');
            });
    });
