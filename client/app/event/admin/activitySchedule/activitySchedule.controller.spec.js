'use strict';

describe('Controller: ActivityProposalCtrl', function () {

  // load the controller's module
  beforeEach(module('eventoLFrontendApp'));

  var ActivityProposalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivityProposalCtrl = $controller('ActivityProposalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
