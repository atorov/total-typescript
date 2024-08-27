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

concatName('John', 'Doe');
concatName('Jane');
