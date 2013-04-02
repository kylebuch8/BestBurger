'use strict';

describe('Controller: RateCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var RateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    RateCtrl = $controller('RateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
