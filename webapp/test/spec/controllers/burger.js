'use strict';

describe('Controller: BurgerCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var BurgerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    BurgerCtrl = $controller('BurgerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
