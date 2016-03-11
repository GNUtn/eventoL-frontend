'use strict';

describe('Controller: RegistrationAdminCtrl', function() {

    // load the controller's module
    beforeEach(module('eventoLFrontendApp'));

    var RegistrationAdminCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope                 = $rootScope.$new();
        RegistrationAdminCtrl = $controller('RegistrationAdminCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        should(1).equal(1);
    });
});
