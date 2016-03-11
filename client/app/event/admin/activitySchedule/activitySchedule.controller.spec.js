'use strict';

describe('Controller: ActivityScheduleCtrl', function() {

    // load the controller's module
    beforeEach(module('eventoLFrontendApp'));

    var ActivityScheduleCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope                = $rootScope.$new();
        ActivityScheduleCtrl = $controller('ActivityScheduleCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        should(1).equal(1);
    });
});
