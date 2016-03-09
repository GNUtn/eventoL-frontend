'use strict';

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('eventoLFrontendApp'));

  var AdminCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminCtrl = $controller('AdminCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
