'use strict';

angular.module('eventoLFrontendApp')
    .controller('AdminCtrl', function($routeParams, eventService) {
        var self  = this;
        this.view = "activity-proposals";

        eventService.getEvent($routeParams.eventId)
            .then(function(response) {
                self.event = response.data;
            })
            .then(function() {
                self.event_date = moment(self.event.dates[0]).format('LL');
            });

        this.isActive = function isActive(view) {
            return view === this.view;
        }
    });
