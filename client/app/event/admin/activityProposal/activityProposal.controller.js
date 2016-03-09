'use strict';

angular.module('eventoLFrontendApp')
    .controller('ActivityProposalCtrl', function($routeParams, eventService, activityService) {

        var self = this;

        eventService.getEvent($routeParams.eventId)
            .then(function(response) {
                self.event = response.data;
            })
            .then(function() {
                return activityService.getProposals(self.event.id)
            })
            .then(function(proposals) {
                self.proposals = proposals;
            })
            .then(function() {
                return activityService.getRooms(self.event.id)
            })
            .then(function(rooms) {
                self.rooms = rooms;
            });
    });




