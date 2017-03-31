'use strict';

const rnum = require('rnum');
const shuffle = require('./shuffle');

module.exports = (length, x) => {
  if ((typeof length === 'undefined') || (typeof x === 'undefined')) {
    throw new Error('[length] and [x] can not be empty');
  }

  length = parseInt(length);
  x = parseInt(x);

  if (x < 2) {
    throw new Error('[x] can not be less than 2');
  }

  if (length <= x) {
    throw new Error('[length] must be of higher value than [x]')
  }

  const code = [];

  code.push(rnum(length - x));

  const xNumber = rnum(1);

  for (let i = 0; i < x; i++) {
    code.push(xNumber);
  }

  shuffle(code);

  return parseInt(code.join(''));
};