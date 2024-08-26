// const concatName = (user: { first: string; last: string }) => {
//     if (!user.last) {
//         return user.first;
//     }

//     return `${user.first} ${user.last}`;
// };

// const result = concatName({
// Argument of type '{ first: string; }' is not assignable to parameter of type '{ first: string; last: string; }'.
//   Property 'last' is missing in type '{ first: string; }' but required in type '{ first: string; last: string; }'.
//   first: "John",
// });

function concatName2(user: { first: string; last?: string }) {
    if (!user.last) {
        return user.first;
    }

    return `${user.first} ${user.last}`;
}

const result = concatName2({
    first: 'John',
});
