// const parseValue = (value: unknown) => {
//     if (
//         typeof value === 'object' &&
//         value !== null &&
//         'data' in value &&
//         typeof value.data === 'object' &&
//         value.data !== null &&
//         'id' in value.data &&
//         typeof value.data.id === 'string'
//     ) {
//         return value.data.id;
//     }

//     throw new Error('Parsing error!');
// };

// const parseValueAgain = (value: unknown) => {
//     if (
//         typeof value === 'object' &&
//         value !== null &&
//         'data' in value &&
//         typeof value.data === 'object' &&
//         value.data !== null &&
//         'id' in value.data &&
//         typeof value.data.id === 'string'
//     ) {
//         return value.data.id;
//     }

//     throw new Error('Parsing error!');
// };

function hasDataId(value: unknown): value is { data: { id: string } } {
    return (
        typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string'
    );
}

function parseValue508(value: unknown) {
    if (hasDataId(value)) {
        return value.data.id;
    }

    throw new Error('Parsing error!');
}

function parseValueAgain(value: unknown) {
    if (
        typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string'
    ) {
        return value.data.id;
    }

    throw new Error('Parsing error!');
}
