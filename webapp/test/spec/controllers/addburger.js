'use strict';

describe('Controller: AddBurgerCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var AddburgerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AddburgerCtrl = $controller('AddBurgerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
