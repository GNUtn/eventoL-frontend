'use strict';

describe('Service: activityService', function() {

    // load the service's module
    beforeEach(module('eventoLFrontendApp'));

    // instantiate service
    var activityService;
    beforeEach(inject(function(_activityService_) {
        activityService = _activityService_;
    }));

    it('should do something', function() {
        activityService.should.be.true;
    });

});
