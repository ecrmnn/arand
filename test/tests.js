'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const arand = require('../src');

const unqiue = array => {
  return array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
};

describe('Arand Test Suite', function () {

  for (let i = 0; i < 200; i++) {
    it('should get a 3 digit number where at least two digits are the same', function () {
      const digits = arand(3, 2).toString().split('');
      expect(unqiue(digits).length).to.be.lessThan(3);
    });
  }

  for (let i = 0; i < 200; i++) {
    it('should get a 4 digit number where at least two digits are the same', function () {
      const digits = arand(4, 2).toString().split('');
      expect(unqiue(digits).length).to.be.lessThan(4);
    });
  }

  for (let i = 0; i < 200; i++) {
    it('should get a 10 digit number where at least 9 digits are the same', function () {
      const digits = arand(10, 9).toString().split('');
      expect(unqiue(digits).length).to.be.lessThan(3);
    });
  }

  it('should throw error if called without arguments', function () {
    expect(() => {
      arand()
    }).to.throw(Error);
  });

  it('should throw error if called with length only', function () {
    expect(() => {
      arand(98)
    }).to.throw(Error);
  });

  it('should throw error if length and x are equal', function () {
    expect(() => {
      arand(200, 200)
    }).to.throw(Error);
  });

  it('should throw error if length is less than x', function () {
    expect(() => {
      arand(10, 12)
    }).to.throw(Error);
  });

  it('should throw error if x is less than 2', function () {
    expect(() => {
      arand(10, 1)
    }).to.throw(Error);
  });
});