'use strict';

const fn = () => {
    const user = { name: 'Nazar' };
    let user2 = { name: 'Nazar'};

    user.name = 'Oleg';
    user2.name = 'Oleg';

    user2 = {name: 'Oleksandr '};
    
    return { user, user2 };
    
}

console.log(fn());