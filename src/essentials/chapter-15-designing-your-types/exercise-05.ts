// type Example = Omit<{ a: string }, 'b'>;

// type StrictOmit<T, K> = Omit<T, K>;
// // Type 'K' does not satisfy the constraint 'string | number | symbol'.

// type ShouldFail = StrictOmit<
//     { a: string },
//     // @ts-expect-error
//     // Unused '@ts-expect-error' directive.
//     'b'
// >;

// type tests = [
//     Expect<Equal<StrictOmit<{ a: string; b: number }, 'b'>, { a: string }>>,
//     Expect<Equal<StrictOmit<{ a: string; b: number }, 'b' | 'a'>, {}>>,
//     Expect<
//         Equal<
//             StrictOmit<{ a: string; b: number }, never>,
//             { a: string; b: number }
//         >
//     >
// ];type Example = Omit<{ a: string }, 'b'>;

type StrictOmit<T extends Record<string, unknown>, K extends keyof T> = Omit<
    T,
    K
>;

type ShouldFail = StrictOmit<
    { a: string },
    // @ts-expect-error
    // Unused '@ts-expect-error' directive.
    'b'
>;
