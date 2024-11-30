// const UNKNOWN_CODE = 8000;

// const addCodeToError = <TError>(error: TError) => {
//     return {
//         ...error,
//         code: error.code ?? UNKNOWN_CODE,
//         // Property 'code' does not exist on type 'TError'.
//     };
// };

// it('Should accept a standard error', () => {
//     const errorWithCode = addCodeToError(new Error('Oh dear!'));

//     type test1 = Expect<Equal<typeof errorWithCode, Error & { code: number }>>;
//     // Type 'false' does not satisfy the constraint 'true'.

//     console.log(errorWithCode.message);

//     type test2 = Expect<Equal<typeof errorWithCode.message, string>>;
// });

// it('Should accept a custom error', () => {
//     const customErrorWithCode = addCodeToError({
//         message: 'Oh no!',
//         code: 123,
//         filepath: '/',
//     });

//     type test3 = Expect<
//         Equal<
//             // Type 'false' does not satisfy the constraint 'true'.
//             typeof customErrorWithCode,
//             {
//                 message: string;
//                 code: number;
//                 filepath: string;
//             } & {
//                 code: number;
//             }
//         >
//     >;

//     type test4 = Expect<Equal<typeof customErrorWithCode.message, string>>;
// });

const UNKNOWN_CODE = 8000;

function addCodeToError<TError extends { message: string; code?: unknown }>(
    error: TError
) {
    return {
        ...error,
        code: error.code ?? UNKNOWN_CODE,
    };
}

const res1 = addCodeToError({ message: 'qwerty' });
const res2 = addCodeToError({ message: 'qwerty', code: 42 });
