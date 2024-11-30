// type PromiseFunc = () => Promise<any>;

// const safeFunction = (func: PromiseFunc) => async () => {
//     try {
//         const result = await func();
//         return result;
//     } catch (e) {
//         if (e instanceof Error) {
//             return e;
//         }
//         throw e;
//     }
// };

// // it('should return an error if the function throws', async () => {
// //     const func = safeFunction(async () => {
// //         if (Math.random() > 0.5) {
// //             throw new Error('Something went wrong');
// //         }
// //         return 123;
// //     });

// //     type test1 = Expect<Equal<typeof func, () => Promise<Error | number>>>;
// //     // Type 'false' does not satisfy the constraint 'true'.

// //     const result = await func();

// //     type test2 = Expect<Equal<typeof result, Error | number>>;
// //     // Type 'false' does not satisfy the constraint 'true'.
// // });

// // it('should return the result if the function succeeds', async () => {
// //     const func = safeFunction(() => {
// //         return Promise.resolve(`Hello!`);
// //     });

// //     type test1 = Expect<Equal<typeof func, () => Promise<string | Error>>>;
// //     // Type 'false' does not satisfy the constraint 'true'.

// //     const result = await func();

// //     type test2 = Expect<Equal<typeof result, string | Error>>;
// //     // Type 'false' does not satisfy the constraint 'true'.

// //     expect(result).toEqual('Hello!');
// // });

// type PromiseFunc<Т> = <T>() => Promise<T>;

// const safeFunction =
//     <TResult>(func: PromiseFunc<TResult>) =>
//     async (...args: any[]) => {
//         //   ^^^^^^^^^^^^^^ Now can receive args!
//         try {
//             const result = await func(...args);
//             return result;
//         } catch (e) {
//             if (e instanceof Error) {
//                 return e;
//             }
//             throw e;
//         }
//     };

// // it('should return the result if the function succeeds', async () => {
// //     const func = safeFunction((name: string) => {
// //         return Promise.resolve(`hello ${name}`);
// //     });

// //     type test1 = Expect<
// //         Equal<typeof func, (name: string) => Promise<Error | string>>
// //         // Type 'false' does not satisfy the constraint 'true'.
// //     >;
// // });

// // hovering over func shows:
// const func: (...args: any[]) => Promise<string | Error>;

// it('should return an error if the function throws', async () => {
//     const func = safeFunction(async () => {
//         if (Math.random() > 0.5) {
//             throw new Error('Something went wrong');
//         }
//         return 123;
//     });

//     type test1 = Expect<Equal<typeof func, () => Promise<Error | number>>>;
//     // Type 'false' does not satisfy the constraint 'true'.

//     const result = await func();

//     type test2 = Expect<Equal<typeof result, Error | number>>;
// });

// it('should return the result if the function succeeds', async () => {
//     const func = safeFunction((name: string) => {
//         return Promise.resolve(`hello ${name}`);
//     });

//     type test1 = Expect<
//         Equal<typeof func, (name: string) => Promise<Error | string>>
//         // Type 'false' does not satisfy the constraint 'true'.
//     >;

//     const result = await func('world');

//     type test2 = Expect<Equal<typeof result, string | Error>>;

//     expect(result).toEqual('hello world');
// });

type PromiseFunc<A extends unknown[], R> = (...args: A) => Promise<R>;

function safeFunction<TArgs extends unknown[], TResult>(
    func: PromiseFunc<TArgs, TResult>
) {
    return async (...args: TArgs) => {
        try {
            const result = await func(...args);
            return result;
        } catch (e) {
            if (e instanceof Error) {
                return e;
            }
            throw e;
        }
    };
}
