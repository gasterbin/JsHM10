"use strict";

function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
    return this.length;
  };

  this.reduceRight = function (callback, start) {
    let accumulator = start;
    let i = start !== undefined ? this.length - 1 : this.length - 2;
    if (start === undefined) {
      accumulator = this[this.length - 1];
    }
    for (; i >= 0; i--) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
}

const testArr = new Array("Hello", " ", "World", "!");
const result = testArr.reduceRight(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

console.log(result);
