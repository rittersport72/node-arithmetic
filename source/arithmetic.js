// Extended Euclidean algorithm
//
// gcd(a, b) = s * a + t * b
//
// |  a |  b |  q |  u |  s |  v | 	t |
// |----|----|----|----|----|----|----|
// |  0 | 99 |  0 |  0 |  1 |  1 | 	0 |
// | 99 | 78 |  1 |  1 |  0 |  0 | 	1 |
// | 78 | 21 |  3 |  0 |  1 |  1 | −1 |
// | 21 | 15 |  1 |  1 | −3 | −1 | 	4 |
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

module.exports.kuttaka = function kuttakaAlgorithm() {
    
};

module.exports.chineseRemainder = function chineseRemainderTheorem() {

};
