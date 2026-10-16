'use strict';

const { random } = require('./random');

const generateKey = (length, characters) => {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[random(0, characters.length - 1)];
    }
    return key;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);