'use strict';

angular.module('eventoLFrontendApp')
    .service('activityService', ['$http', function($http) {

        this.proposals = undefined;
        this.rooms     = undefined;
        this.eventId   = undefined;

        this.getProposals = function getProposals(eventId) {
            if(eventId !== this.eventId || !this.proposals) {
                this.eventId   = eventId;
                this.proposals = $http.get('/api/activities/proposals/' + eventId).then(function(response) {
                    return response.data;
                });
            }

            return this.proposals;
        };

        this.getRooms = function getRooms(eventId) {
            if(eventId !== this.eventId || !this.rooms) {
                this.eventId = eventId;
                this.rooms   = $http.get('/api/rooms/' + eventId).then(function(response) {
                    return response.data;
                });
            }

            return this.rooms;
        }
    }]);
