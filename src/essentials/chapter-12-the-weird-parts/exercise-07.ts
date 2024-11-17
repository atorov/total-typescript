// const objOfFunctions = {
//     string: (input: string) => input.toUpperCase(),
//     number: (input: number) => input.toFixed(2),
//     boolean: (input: boolean) => (input ? 'true' : 'false'),
// };

// const format = (input: string | number | boolean) => {
//   // 'typeof' isn't smart enough to know that
//   // it can only be 'string', 'number', or 'boolean',
//   // so we need to use 'as'
//   const inputType = typeof input as "string" | "number" | "boolean";
//   const formatter = objOfFunctions[inputType];

//   return formatter(input);
// Argument of type 'string | number | boolean' is not assignable to parameter of type 'never'.
//   Type 'string' is not assignable to type 'never'.
// };

const objOfFunctions = {
    string: (input: string) => input.toUpperCase(),
    number: (input: number) => input.toFixed(2),
    boolean: (input: boolean) => (input ? 'true' : 'false'),
};

const format1 = (input: string | number | boolean) => {
    const inputType = typeof input as 'string' | 'number' | 'boolean';
    const formatter = objOfFunctions[inputType];
    return formatter(input as never);
};

const format2 = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        return objOfFunctions.string(input);
    } else if (typeof input === 'number') {
        return objOfFunctions.number(input);
    } else {
        return objOfFunctions.boolean(input);
    }
};
