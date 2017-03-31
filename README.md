# arand
> Generate an almost random number of a given length

[![Travis](https://img.shields.io/travis/ecrmnn/arand.svg?style=flat-square)](https://travis-ci.org/ecrmnn/arand.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/arand.svg?style=flat-square)](http://badge.fury.io/js/arand)
[![npm downloads](https://img.shields.io/npm/dm/arand.svg?style=flat-square)](http://badge.fury.io/js/arand)
[![npm license](https://img.shields.io/npm/l/arand.svg?style=flat-square)](http://badge.fury.io/js/arand)

### Installation
```bash
npm install arand --save
```

### What?
Almost random? What kind of sorcery is this?

``arand(length, x)`` generates a random number of a given ``length`` where *at least* ``x`` of the digits are the same. This generates numbers that are easy to remember and type. ``arand()`` is perfect when generating codes used for two way authentication.

### Usage
```javascript
const arand = require('arand');

arand(3, 2);
//=> 808

arand(4, 2);
//=> 6768

arand(4, 2);
//=> 9993

arand(6, 4);
//=> 242227
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)