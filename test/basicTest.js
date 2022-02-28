var assert = require('assert');

// test container


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    }); // called a "test case" Use description tier titles (called sub structures?).
  });
  describe('No Empty Array', function () {
    it('Array is empty', function () {
      const array = [];
      assert.equal(array.length, 0);
    });
  });
  describe('Empty array', function () {
    it('Array is not empty', function () {
      const array = ["James"];
      assert.notEqual(array.length, 0);
    });
  });

});

describe('Numbers', function () {
  describe('Multiplication test', function () {
    it('should return 15 when 5 is multiplied by 3', function () {
      const result = 5 * 3;
      assert.equal(result, 15);
    });
  });
  describe('Division test', function () {
    it('should not return 4 when 5 is multiplied by 3', function () {
      const result = 15 / 3;
      assert.notEqual(result, 4);
    });
  });
});

describe('Array specific index', function () {
  describe('#indexOf() block scope', function () {
    it('should return index of 3 for number 2 index', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });
  });
});

//keyword 'it' defines text blocks
//test every function in each file
//more than likely you would be testing API return promises?