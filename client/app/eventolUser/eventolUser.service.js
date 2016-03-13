'use strict';

angular.module('eventoLFrontendApp')
    .service('eventolUserService', ['$http', function($http) {

        this.organizers = undefined;
        this.eventId    = undefined;
        this.installers = undefined;

        this.getOrganizers = function getOrganizers(eventId) {
            if (eventId !== this.eventId || !this.organizers) {
                this.eventId    = eventId;
                this.organizers = $http.get('/api/organizers/' + eventId).then(function(response) {
                    return response.data;
                });
            }

            return this.organizers;
        };

        this.saveOrganizers = function saveOrganizers(eventId, organizers) {
            return $http.post('/api/organizers/', {eventId: eventId, organizers: organizers});
        };

        this.saveInstallers = function saveInstallers(eventId, installers) {
            return $http.post('/api/installers/', {eventId: eventId, installers: installers});
        };

        this.getInstallers = function getInstallers(eventId) {
            if (eventId !== this.eventId || !this.installers) {
                this.eventId    = eventId;
                this.installers = $http.get('/api/installers/' + eventId).then(function(response) {
                    return response.data;
                });
            }

            return this.installers;
        };

        this.removeOrganizer = function removeOrganizer(eventId, organizer) {
            return $http.delete('/api/organizers/' + organizer.username);
        };

        this.removeInstaller = function removeInstaller(eventId, installer) {
            return $http.delete('/api/installers/' + installer.username);
        };
    }]);
