const assert = require('assert');
const sumOfOther = require('./sumOfOther');
const make = require('./make');
const sum = (a, b) => a + b;
const recursion = require('./recursion');

describe('sumOfOthers', () => {
  it('should return [8, 7, 6, 9]', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });
  it('should return [ 20, 19, 18, 17, 16, 15 ]', () => {
    const solutions = sumOfOther([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(solutions, [20, 19, 18, 17, 16, 15]);
  });
});

describe('make', () => {
  it('should return 777', () => {
    const solutions = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solutions, 777);
  });
  it('should return 20', () => {
    const solutions = make(2, 3, 4)(2, 4, 5)(sum);
    assert.deepEqual(solutions, 20);
  });
  it('should return 36', () => {
    const solutions = make(1)(2)(3)(4)(5)(6)(7)(8)(sum);
    assert.deepEqual(solutions, 36);
  });
});
describe('recursion', () => {
  it('node 1', () => {
    const solutions = recursion({
      "value":100,
      "left":{"value":90,"left":{"value":70},"right":{"value":99}},
      "right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    assert.deepEqual(solutions, [[100], [90, 120], [70,99,110,130]]);
  });
  it('node 2', () => {
    const solutions = recursion({
      "value":900,
      "left":{
        "value":123,
        "left":{"value":77},
        "right":{"value":87}},
      "right":{
        "value":321,
        "left":{"value":8},
        "right":{
          "value":99,
          "left":{"value":55},
          "right":{"value":33}
        }}});
    assert.deepEqual(solutions, [[900], [123, 321], [77,87,8,99], [55, 33]]);
  });
});
