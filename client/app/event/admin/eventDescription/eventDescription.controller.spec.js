'use strict';

describe('Controller: EventDescriptionCtrl', function() {

    // load the controller's module
    beforeEach(module('eventoLFrontendApp'));

    var EventDescriptionCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope                = $rootScope.$new();
        EventDescriptionCtrl = $controller('EventDescriptionCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        should(1).equal(1);
    });
});
