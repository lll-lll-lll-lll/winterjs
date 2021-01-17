// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Thaana`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000780, 0x0007B1]
  ]
});
testPropertyEscapes(
  /^\p{Script=Thaana}+$/u,
  matchSymbols,
  "\\p{Script=Thaana}"
);
testPropertyEscapes(
  /^\p{Script=Thaa}+$/u,
  matchSymbols,
  "\\p{Script=Thaa}"
);
testPropertyEscapes(
  /^\p{sc=Thaana}+$/u,
  matchSymbols,
  "\\p{sc=Thaana}"
);
testPropertyEscapes(
  /^\p{sc=Thaa}+$/u,
  matchSymbols,
  "\\p{sc=Thaa}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00077F],
    [0x0007B2, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Thaana}+$/u,
  nonMatchSymbols,
  "\\P{Script=Thaana}"
);
testPropertyEscapes(
  /^\P{Script=Thaa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Thaa}"
);
testPropertyEscapes(
  /^\P{sc=Thaana}+$/u,
  nonMatchSymbols,
  "\\P{sc=Thaana}"
);
testPropertyEscapes(
  /^\P{sc=Thaa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Thaa}"
);

reportCompare(0, 0);
