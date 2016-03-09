'use strict';

angular.module('eventoLFrontendApp')
    .controller('RegistrationAdminCtrl', function($scope, $routeParams, registrationService) {
        var self = this;

        this.gridOptions = {

            columnDefs: [
                {name: 'Username', field: 'username'},
                {name: 'First Name', field: 'first_name'},
                {name: 'Last Name', field: 'last_name'},
                {name: 'Mail', field: 'email'},
                {name: 'Phone', field: 'phone'},
                {name: 'Address', field: 'address'},
                {name: 'Gender', field: 'gender'},
                {name: 'Collaborator?', field: 'collaborator'},
                {name: 'Installer?', field: 'installer'},
                {name: 'Is going to install?', field: 'need_installation'},
                {name: 'Speaker?', field: 'speaker'}
            ],

            enableFiltering            : true,
            enableGridMenu             : true,
            exporterCsvFilename        : 'attendants.csv',
            exporterPdfDefaultStyle    : {fontSize: 9},
            exporterPdfTableStyle      : {margin: [10, 10, 10, 10]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true},
            exporterPdfHeader          : {text: 'Attendants', style: 'headerStyle'},
            exporterPdfFooter          : function(currentPage, pageCount) {
                return {text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle'};
            },
            exporterPdfCustomFormatter : function(docDefinition) {
                docDefinition.styles.headerStyle = {fontSize: 18, bold: true, margin: [5, 5, 5, 5]};
                docDefinition.styles.footerStyle = {fontSize: 10, bold: true, margin: [5, 5, 5, 5]};
                return docDefinition;
            },
            exporterPdfOrientation     : 'landscape',
            exporterPdfPageSize        : 'A4',
            exporterPdfMaxGridWidth    : 600,
            exporterCsvLinkElement     : angular.element(document.querySelectorAll(".custom-csv-link-location")),
            onRegisterApi              : function(gridApi) {
                $scope.gridApi = gridApi;
            }
        };

        registrationService.getAttendants($routeParams.eventId)
            .then(function(attendants) {
                self.attendants       = attendants;
                self.gridOptions.data = attendants;
            });
    });
