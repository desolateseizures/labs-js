'use strict';

const ipToInt = (ip = '127.0.0.1') => {
    const numbers = ip.split('.').map(Number);
    let sum = 0;
    for (const n of numbers) {
        sum = (sum << 8) + n;
    }
    return sum;
};

console.log(ipToInt('127.0.0.1'));