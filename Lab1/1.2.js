'use strict';
const inc = (num) => {
    num.n++;
}

const obj = { n: 12 };
inc(obj);
console.dir(obj); 
