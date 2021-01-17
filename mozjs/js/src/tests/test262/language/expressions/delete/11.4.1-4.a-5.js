// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting the declaration of the environment object
    inside 'with'
flags: [noStrict]
---*/

var o = new Object();
o.x = 1;
var d;
with(o) {
  d = delete o;
}

assert.sameValue(d, false, 'd');
assert.sameValue(typeof o, 'object', 'typeof(o)');
assert.sameValue(o.x, 1, 'o.x');

reportCompare(0, 0);
