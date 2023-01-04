const arithmetic = require('./arithmetic.js');


const result = arithmetic.extendedEuclid(99, 78);

console.log('gcd ', result[0]);
console.log('calc', 99 * result[1] + 78 * result[2]);
