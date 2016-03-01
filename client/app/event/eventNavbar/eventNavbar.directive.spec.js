'use strict';

describe('Directive: eventNavbar', function () {

  // load the directive's module and view
  beforeEach(module('eventoLFrontendApp'));
  beforeEach(module('app/event/eventNavbar/eventNavbar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<event-navbar></event-navbar>');
    element = $compile(element)(scope);
    scope.$apply();
    element.text().should.equal('this is the eventNavbar directive');
  }));
});
