'use strict';

var isNil  = require('is-nil');
var toPath = require('to-path');

module.exports = function (object, path) {

  if (!isNil(object)) {

    var paths  = toPath(path);
    var index  = 0;
    var length = paths.length;

    while (!isNil(object) && index < length) {
      object = object[paths[index++]];
    }

    if (index && index === length) {
      return object;
    }
  }
};
