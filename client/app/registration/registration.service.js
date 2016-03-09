'use strict';

angular.module('eventoLFrontendApp')
    .service('registrationService', ['$http', function($http) {

        this.attendants = undefined;
        this.eventId    = undefined;

        this.getAttendants = function getAttendants(eventId) {
            if(eventId !== this.eventId || !this.attendants) {
                this.eventId    = eventId;
                this.attendants = $http.get('/api/attendants/' + eventId).then(function(response) {
                    return response.data;
                });
            }

            return this.attendants;
        }
    }]);
