// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// const fetchUser = async (): Promise<User> => {
//   const response = await fetch("/api/user");
//   const user = await response.json();
//   return user;
// };

// const example = async () => {
//   const user = await fetchUser();

//   type test = Expect<Equal<typeof user, { name: string; email: string }>>;
// Type 'false' does not satisfy the constraint 'true'.
// };

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

async function fetchUser() {
    const response = await fetch('/api/user');
    const user = (await response.json()) as Pick<User, 'name' | 'email'>;

    return user;
}

(async () => {
    const user = await fetchUser();
    // ...
})();
