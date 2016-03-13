'use strict';

angular.module('eventoLFrontendApp')
    .controller('MembersCtrl', function($routeParams, eventolUserService, registrationService, Pagination) {

        var self = this;
        self.organizersFilter = "";
        self.attendantsPagination = Pagination.getNew();

        eventolUserService.getOrganizers($routeParams.eventId)
        .then(function(organizers) {
            self.organizers = organizers;
            self.newOrganizers = angular.copy(self.organizers);
        })
        .then(function() {
            return eventolUserService.getInstallers($routeParams.eventId);
        })
        .then(function(installers) {
            self.installers = installers;
            self.newInstallers = angular.copy(self.installers);
        })
        .then(function() {
            return registrationService.getAttendants($routeParams.eventId);
        })
        .then(function(attendants) {
            self.attendants = attendants;
            self.attendantsPagination.numPages = Math.ceil(attendants.length / self.attendantsPagination.perPage);
        });

        this.isOrganizer = function isOrganizer(attendant) {
            return this.newOrganizers.filter(function(organizer) {
                return organizer.username === attendant.username;
            }).length > 0;
        };

        this.isInstaller = function isInstaller(attendant) {
            return this.newInstallers.filter(function(installer) {
                return installer.username === attendant.username;
            }).length > 0;
        };

        this.toggleOrganizersSelection = function toggleOrganizersSelection(attendant) {
            if (this.isOrganizer(attendant)) {
                this.newOrganizers = this.newOrganizers.filter(function(organizer) {
                    return organizer.username !== attendant.username;
                });
            } else {
                this.newOrganizers.push(attendant);
            }
        };

        this.toggleInstallersSelection = function toggleInstallersSelection(attendant) {
            if (this.isInstaller(attendant)) {
                this.newInstallers = this.newInstallers.filter(function(installer) {
                    return installer.username !== attendant.username;
                });
            } else {
                this.newInstallers.push(attendant);
            }
        };

        this.discardOrganizersChanges = function discardOrganizersChanges() {
            this.newOrganizers = angular.copy(this.organizers);
        };

        this.discardInstallersChanges = function discardInstallersChanges() {
            this.newInstallers = angular.copy(this.installers);
        };

        this.saveOrganizersChanges = function saveOrganizersChanges() {
            this.organizers = angular.copy(this.newOrganizers);
            eventolUserService.saveOrganizers($routeParams.eventId, this.organizers);
        };

        this.saveInstallersChanges = function saveInstallersChanges() {
            this.installers = angular.copy(this.newInstallers);
            eventolUserService.saveInstallers($routeParams.eventId, this.installers);
        };

        this.removeOrganizer = function removeOrganizer(organizer) {

            //TODO: Avoid removing the currently loged user!

            eventolUserService.removeOrganizer($routeParams.eventId, organizer)
            .then(function() {
                self.organizers = self.organizers.filter(function(user) {
                    return user.username !== organizer.username;
                });

                self.newOrganizers = angular.copy(self.organizers);
            });
        };

        this.removeInstaller = function removeInstaller(installer) {

            //TODO: Avoid removing the currently loged user!

            eventolUserService.removeInstaller($routeParams.eventId, installer)
            .then(function() {
                self.installers = self.installers.filter(function(user) {
                    return user.username !== installer.username;
                });

                self.newInstallers = angular.copy(self.installers);
            });
        };
    });
