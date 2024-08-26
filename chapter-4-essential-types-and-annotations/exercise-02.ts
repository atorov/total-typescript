// const concatTwoStrings = (a, b) => {
//     // Parameter 'b' implicitly has an 'any' type.
//     // Parameter 'a' implicitly has an 'any' type.
//     return [a, b].join(' ');
// };

function concatTwoStrings(a: string, b: string) {
    return [a, b].join(' ');
}

export const result = concatTwoStrings('Hello', 'World');
