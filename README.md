# node-arithmetic
This nodejs code contains formulas for mathematic number theory.

## Extended Euclidean algorithm
The extended Euclidean algorithm calculates the greatest common divisor (gcd) of integers a and b and additionally integers s and t which fullfill the following equation:

```
gcd(a, b) = s a + t b
```
It is used in the RSA cryptosystem for generating the private key by use of Bézout's identity.  
The function returns an array [gcd, s, t] and is used as follows:

```js
const arithmetic = require('./arithmetic.js');

const result = arithmetic.extendedEuclid(99, 78);

console.log('gcd ', result[0]);
console.log('calc', 99 * result[1] + 78 * result[2]);
```
In the above code gcd = 3 and calc = 3, because s = -11 and t = 14.

## References
Extended Euclidian algorithm https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm  
RSA cryptosystem https://en.wikipedia.org/wiki/RSA_(cryptosystem)  
Bézout's identity https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity  
