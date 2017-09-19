var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-truncate');

describe('next/truncate', function () {

  it('nx truncate', function () {
    var str1 = 'heljsldfj sldfjlsdjf';

    assert.equal( nx.truncate(str1,10), 'heljsldfj ...' );
  });

});
