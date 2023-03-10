# node-arithmetic
This nodejs code contains formulas for mathematic number theory.

---

# Extended Euclidean algorithm
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

---

# Chinese remainder theorem
If m1, m2, ... mn are pairwise coprime integers, then there is one x which fulfills the congruences:
```
x = a1 (mod m1)
x = a2 (mod m2)
  :
x = an (mod mn)
```
It is used in the RSA cryptosystem for decryption and signing.  
The function is used as follows:

```js
const arithmetic = require('./arithmetic.js');

const a = [2, 3, 2];
const m = [3, 4, 5];
const x = arithmetic.chineseRemainder(a, m);

console.log('x ', x);
```
In the above code x = -133.

---

# Modular exponentiation

Modular exponentiation is the remainder when an integer b is raised to the power e and divided by a positive integer m.

```
c = b exponent(e) mod m
```

It is used in the RSA cryptosystem for encryption and in Diffie Hellman key exchange.  
The function is used as follows:

```js
const arithmetic = require('./arithmetic.js');

const c = arithmetic.modularPow(4, 13, 497);

console.log('c', c);
```
In the above code c = 445.

---

# References
Extended Euclidian algorithm https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm  
RSA cryptosystem https://en.wikipedia.org/wiki/RSA_(cryptosystem)  
Bézout's identity https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity  
Chinese remainder theorem https://en.wikipedia.org/wiki/Chinese_remainder_theorem  
Modular exponentiation https://en.wikipedia.org/wiki/Modular_exponentiation  
Diffie Hellman key exchange https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange  