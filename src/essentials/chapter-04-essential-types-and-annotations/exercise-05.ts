// const concatName = (user) => {
// Parameter 'user' implicitly has an 'any' type.
//   return `${user.first} ${user.last}`;
// };

function concatName(user: { first: string; last: string }) {
    return `${user.first} ${user.last}`;
}
