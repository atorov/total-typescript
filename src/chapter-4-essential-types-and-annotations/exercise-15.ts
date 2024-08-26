// const concatName = (first: string, last?: string) => {
//     if (!last) {
//         return first;
//     }

//     return `${first} ${last}`;
// };

function concatName(first: string, last = 'Smith') {
    if (!last) {
        return first;
    }

    return `${first} ${last}`;
}
