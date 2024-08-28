// const findUsersByName = (
//   searchParams: { name?: string },
//   users: {
//     id: string;
//     name: string;
//   }[],
// ) => {
//   if (searchParams.name) {
//     return users.filter((user) => user.name.includes(searchParams.name));
// Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
//   Type 'undefined' is not assignable to type 'string'.
//   }

//   return users;
// };

function findUsersByName(
    searchParams: { name?: string },
    users: {
        id: string;
        name: string;
    }[]
) {
    if (searchParams.name) {
        return users.filter((user) => user.name.includes(searchParams.name!));
    }

    return users;
}
