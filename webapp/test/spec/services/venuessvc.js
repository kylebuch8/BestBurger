'use strict';

describe('Service: venuessvc', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var venuessvc;
  beforeEach(inject(function (_venuessvc_) {
    venuessvc = _venuessvc_;
  }));

  it('should do something', function () {
    expect(!!venuessvc).toBe(true);
  });

});
