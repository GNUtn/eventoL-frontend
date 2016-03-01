'use strict';

angular.module('eventoLFrontendApp')
    .service('eventService', ['$http', function($http) {

        this.event   = undefined;
        this.eventId = undefined;

        this.getEvent = function getEvent(eventId) {
            if(eventId !== this.eventId) {
                this.eventId = eventId;
                this.event   = $http.get('/api/events/' + eventId);
            }

            return this.event;
        }
    }]);
