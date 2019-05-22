# @dejanbetos/test

![npm (scoped)](https://img.shields.io/npm/v/@dejanbetos/test.svg)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@dejanbetos/test.svg)](https://img.shields.io/bundlephobia/min/@dejanbetos/test.svg)

# Learning how to create the npm module

## Removes all spaces from a string.

### Install
```
$ npm install @dejanbetos/test
```

### Usage
```javascript
const test = require("@dejanbetos/test");

test("So much space!");
//=> "Somuchspace!"

test(1337);
//=> Uncaught TypeError: Test wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
