// const concatName = (first: string, last: string) => {
//     if (!last) {
//         return first;
//     }

//     return `${first} ${last}`;
// };

function concatName(first: string, last?: string) {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
}

export const result1 = concatName('John', 'Doe');

export const result2 = concatName('Jane');
