'use strict';

const hash {
    'Oleg' : '+380989232345' ,
    'Nazar' : '+380672995338',
    'Vlad' : '+380675345678',
};

const findPhoneByNameHash (name) => hash[name];

module.exports = { hash, findPhoneByNameHash };