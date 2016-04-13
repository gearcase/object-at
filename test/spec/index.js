'use strict';

var expect = require('chai').expect;


describe('object-at', function () {

  var at = require('../../');

  it('common test', function () {

    var object = {
      a: [
        {
          b: {
            c: 3
          }
        },
        4
      ]
    };

    expect(at(object, 'a[0].b.c')).to.be.equal(3);
    expect(at(object, 'a[1]')).to.be.equal(4);

    expect(at(['a', 'b', 'c'], 2)).to.be.equal('c');

    expect(at()).to.be.undefined;
    expect(at(['a', 'b', 'c'])).to.be.undefined;
    expect(at(['a', 'b', 'c'], 5)).to.be.undefined;
    expect(at(['a', 'b', 'c'], '1.2')).to.be.undefined;

  });
});
