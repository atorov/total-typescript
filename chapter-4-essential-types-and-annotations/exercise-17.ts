// type User = {
//   id: string;
//   name: string;
// };

// const modifyUser = (user: User[], id: string, makeChange) => {
// Parameter 'makeChange' implicitly has an 'any' type.
//   return user.map((u) => {
//     if (u.id === id) {
//       return makeChange(u);
//     }

//     return u;
//   });
// };

type User = {
    id: string;
    name: string;
};

type MakeChange = (user: User) => User;

function modifyUser(user: User[], id: string, makeChange: MakeChange) {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }

        return u;
    });
}

const users = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Jane' },
];

modifyUser(users, '1', (user) => {
    return { ...user, name: 'Waqas' };
});
