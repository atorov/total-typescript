// const createUser = (id: string) => {
//     return {
//         id,
//         name: 'John Doe',
//         email: 'example@email.com',
//     };
// };

// type User = unknown;

// type test = Expect<
//   Equal<
// Type 'false' does not satisfy the constraint 'true'.
//     User,
//     {
//       id: string;
//       name: string;
//       email: string;
//     }
//   >
// >;

function createUser(id: string) {
    return {
        id,
        name: 'John Doe',
        email: 'example@email.com',
    };
}

type User = ReturnType<typeof createUser>;
