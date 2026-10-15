'use strict';

const obj = [true, 'hello', 5, 12, -200, false , false, 'word', NaN , "Nazar" , 'Timofey', 111 , 'text', 24,  undefined, NaN]

const count = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
}

for (const item of obj) {
    const type = typeof item;
    count[type]++;
}
console.dir(count);