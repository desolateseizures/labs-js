'use strict'

const phoneBook = [
    { name: 'Nazar', phone: '+380672995338' },
    { name: 'Oleg', phone: '+380989232345' },
    { name: 'Vlad', phone: '+380675345678' }
];

const findPhoneByName = (name) => {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name )
            return phoneBook[i].phone;
    }
};

console.log(findPhoneByName('Nazar'));