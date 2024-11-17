// interface User {
//     id: number;
//     name: string;
// }

// const users = [
//     {
//         name: 'Waqas',
//     },
//     {
//         name: 'Zain',
//     },
// ];

// const usersWithIds: User[] = users.map((user, index) => ({
//   ...user,
//   id: index,
//   // @ts-expect-error
// Unused '@ts-expect-error' directive.
//   age: 30,
// }));

interface User {
    id: number;
    name: string;
}

const users = [
    {
        name: 'Waqas',
    },
    {
        name: 'Zain',
    },
];

const usersWithIds1: User[] = users.map(
    (user, index) =>
        ({
            ...user,
            id: index,
            // @ts-expect-error
            age: 30,
        } satisfies User)
);

const usersWithIds2 = users.map(
    (user, index): User => ({
        ...user,
        id: index,
        // @ts-expect-error
        age: 30,
    })
);
