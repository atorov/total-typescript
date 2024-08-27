// const parseValue = (value: unknown) => {
//   if (true) {
//     return value.data.id
// 'value' is of type 'unknown'.
//   }

//   throw new Error('Parsing error!')
// }

function parseValue(value: unknown): string {
    if (
        value instanceof Object &&
        'data' in value &&
        value.data instanceof Object &&
        'id' in value.data &&
        typeof value.data.id === 'string'
    ) {
        return value.data.id;
    }

    throw new Error('Parsing error!');
}
