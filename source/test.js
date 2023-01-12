const arithmetic = require('./arithmetic.js');

// Extended Euclid algorithm
const result = arithmetic.extendedEuclid(99, 78);

console.log('gcd ', result[0]);
console.log('calc', 99 * result[1] + 78 * result[2]);

// Chinese remainder theorem
const a = [2, 3, 2];
const m = [3, 4, 5];
const x = arithmetic.chineseRemainder(a, m);

console.log('x', x);

// Modular pow
const c = arithmetic.modularPow(4, 13, 497);

console.log('c', c);