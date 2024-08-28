// const fetchUser = async (id: string) => {
//   return {
//     id,
//     name: "John Doe",
//     email: "example@email.com",
//   };
// };

// type test = Expect<
//   Equal<
// Type 'false' does not satisfy the constraint 'true'.
//     User,
// Cannot find name 'User'.
//     {
//       id: string;
//       name: string;
//       email: string;
//     }
//   >
// >;

async function fetchUser(id: string) {
    return {
        id,
        name: 'John Doe',
        email: 'example@email.com',
    };
}

type User = Awaited<ReturnType<typeof fetchUser>>;
