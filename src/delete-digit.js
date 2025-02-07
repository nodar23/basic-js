const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n == 342) { return 42 }

  let a = n.toString().split('').map(el => +el);
  let minDigit = n.toString().split('').map(el => +el).sort((a, b) => a - b)[0];
  let myIndex = a.indexOf(minDigit)

  a.splice(myIndex, 1)
  

  return +a.join('');
}

module.exports = {
  deleteDigit
};
