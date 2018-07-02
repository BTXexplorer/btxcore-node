'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export btxcore-lib', function() {
    var btxcore = require('../');
    should.exist(btxcore.lib);
    should.exist(btxcore.lib.Transaction);
    should.exist(btxcore.lib.Block);
  });
});
