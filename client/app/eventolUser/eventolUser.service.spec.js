'use strict';

describe('Service: eventolUser', function () {

  // load the service's module
  beforeEach(module('eventoLFrontendApp'));

  // instantiate service
  var eventolUser;
  beforeEach(inject(function (_eventolUser_) {
    eventolUser = _eventolUser_;
  }));

  it('should do something', function () {
    !!eventolUser.should.be.true;
  });

});
