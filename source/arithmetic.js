// Extended Euclidean algorithm
//
// gcd(a, b) = s * a + t * b
//
// |  a |  b |  q |  u |  s |  v |  t |
// |----|----|----|----|----|----|----|
// |  0 | 99 |  0 |  0 |  1 |  1 |  0 |
// | 99 | 78 |  1 |  1 |  0 |  0 |  1 |
// | 78 | 21 |  3 |  0 |  1 |  1 | −1 |
// | 21 | 15 |  1 |  1 | −3 | −1 |  4 |
// | 15 |  6 |  2 | −3 |  4 |  4 | −5 |
// |  6 |  3 |  2 |  4 |−11 | −5 | 14 |
// |  3 |  0 |    |−11 | 26 | 14 |−33 |

module.exports.extendedEuclid = function extendedEuclidAlgorithm(a, b) {
    console.log('a', a);
    console.log('b', b);
    // Init variables (see table)
    s = 1;
    t = 0;
    u = 0;
    v = 1;

    // Loop until b == 0
    while (b !== 0)
    {
        q = Math.floor(a / b);
        b1 = b; // temp
        b = a - q * b;
        a = b1;
        u1 = u; // temp
        u = s - q * u;
        s = u1;
        v1 = v; // temp
        v = t - q * v;
        t = v1;

        // console.log('a ', a);
        // console.log('b ', b);
        // console.log('s ', s);
        // console.log('t ', t);
    }

    let result = [a, s, t];

    return result;
};

// Chinese remainder theorem
//
// If m1, m2, ... mn are pairwise coprime integers, then there is one x which fulfills the congruences:
// x = a1 (mod m1)
// x = a2 (mod m2)
//   :
// x = an (mod mn)
//
// Solution
// M = m1 * m2 * ... mn (least common multiple)
//
// M1 = M / m1
// M2 = M / m2
//    :
// Mn = M / mn
//
// r1 * m1 + s1 * M1 = 1
// r2 * m2 + s2 * M2 = 1
//                   :
// rn * mn + sn * Mn = 1
//
// e1 = s1 * M1
// e2 = s2 * M2
//    :
// en = sn * Mn
//
// x = a1 * e1 + a2 * e2 + ... an * en
// 
// x = z mod M    
// Find z

module.exports.chineseRemainder = function chineseRemainderTheorem(a, m) {
    console.log('a');
    console.log(a.toString());
    console.log('m');
    console.log(m.toString());

    // Check array length
    if (a.length === m.length) {
        let x = 0;
        // M, least common multiple
        let bigM = m.reduce((a, b) => {
            return a * b;
        });
        
        for (i = 0; i < m.length; i++) {
            // Mn = M / mn
            let mn = Math.floor(bigM / m[i]);
            // rn * mn + sn * Mn = 1
            let result = module.exports.extendedEuclid(m[i], mn);
            // en = sn * Mn
            let en = result[2] * mn;
            // console.log(result.toString());
            // x = a1 * e1 + a2 * e2 + ... an * en
            x += a[i] * en; 
        }

        return x;
    } else {
        return 0;
    }
};
