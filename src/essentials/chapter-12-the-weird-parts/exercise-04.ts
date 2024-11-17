// interface User {
//     id: number;
//     name: string;
// }

// function printUser(user: User) {}

// it('Should log all the keys of the user', () => {
//     const consoleSpy = vitest.spyOn(console, 'log');

//     printUser({
//         id: 1,
//         name: 'Waqas',
//     });

//     expect(consoleSpy).toHaveBeenCalledWith(1);
//     expect(consoleSpy).toHaveBeenCalledWith('Waqas');
// });

interface User {
    id: number;
    name: string;
}

function printUser1(user: User) {
    Object.keys(user).forEach((key) => {
        console.log(user[key as keyof User]);
    });
}

function printUser2(user: User) {
    for (const key in user) {
        if (Object.prototype.hasOwnProperty.call(user, key)) {
            const element = user[key as keyof User];
            console.log(key, element);
        }
    }
}

function printUser3(obj: Record<string, unknown>) {
    Object.keys(obj).forEach((key) => {
        console.log(obj[key]);
    });
}

function printUser4(user: User) {
    Object.values(user).forEach(console.log);
}

function printUser5(user: User) {
    Object.entries(user).forEach(([key, value]) => {
        console.log(key, value);
    });
}

function printUser6(user: Record<keyof User, User[keyof User]>) {
    Object.entries(user).forEach(([key, value]) => {
        console.log(key, value);
    });
}
