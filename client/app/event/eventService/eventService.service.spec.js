'use strict';

describe('Service: eventService', function () {

  // load the service's module
  beforeEach(module('eventoLFrontendApp'));

  // instantiate service
  var eventService;
  beforeEach(inject(function (_eventService_) {
    eventService = _eventService_;
  }));

  it('should do something', function () {
    !!eventService.should.be.true;
  });

});
