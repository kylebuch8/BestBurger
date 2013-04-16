'use strict';

describe('Service: ratingssvc', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var ratingssvc;
  beforeEach(inject(function (_ratingssvc_) {
    ratingssvc = _ratingssvc_;
  }));

  it('should do something', function () {
    expect(!!ratingssvc).toBe(true);
  });

});
