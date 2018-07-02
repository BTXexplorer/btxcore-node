'use strict';

var createError = require('errno').create;

var btxcoreNodeError = createError('btxcoreNodeError');

var RPCError = createError('RPCError', btxcoreNodeError);

module.exports = {
  Error: btxcoreNodeError,
  RPCError: RPCError
};
