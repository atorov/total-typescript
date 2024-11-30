// interface User {
//     id: string;
//     name: string;
// }

// interface AdminUser extends User {
//     roles: string[];
// }

// function assertIsAdminUser(user: User | AdminUser) {
//     if (!('roles' in user)) {
//         throw new Error('User is not an admin');
//     }
// }

// const handleRequest = (user: User | AdminUser) => {
//     type test1 = Expect<Equal<typeof user, User | AdminUser>>;

//     assertIsAdminUser(user);

//     type test2 = Expect<Equal<typeof user, AdminUser>>;
//     // Type 'false' does not satisfy the constraint 'true'.

//     user.roles;
//     // Property 'roles' does not exist on type 'User | AdminUser'.
//     // Property 'roles' does not exist on type 'User'.
// };

interface User {
    id: string;
    name: string;
}

interface AdminUser extends User {
    roles: string[];
}

function assertIsAdminUser(user: User | AdminUser): asserts user is AdminUser {
    if (!('roles' in user)) {
        throw new Error('User is not an admin');
    }
}

const handleRequest = (user: User | AdminUser) => {
    // @ts-expect-error
    console.log(user.roles);

    assertIsAdminUser(user);

    console.log(user.roles);
};
