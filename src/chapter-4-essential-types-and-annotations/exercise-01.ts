// export const add = (a: boolean, b: boolean) => {
//     return a + b;
//                  ^ Operator '+' cannot be applied to types 'boolean' and 'boolean'.
// };

export const add = (a: number, b: number) => {
    return a + b;
};

const result = add(1, 2);
