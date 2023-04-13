const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 let a = '';


 function getSumOfDigits(n) {
     let a = n.toString().split('').map(el => +el);
     let aa = 0;
 
     for (let i = 0; i < a.length; i++) {
         aa += a[i]
     }

     if (aa >= 10) { return getSumOfDigits(aa)
    } else { return aa}
 
     // if (n.toString().split('').map(el => +el).reduce((a,b) => a + b) >=10) {return getSumOfDigits()
     // } else { return n + 0}
   }

module.exports = {
  getSumOfDigits
};
