// interface Attributes {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// type AttributeGetters = unknown;

// // type tests = [
// //   Expect<
// //     Equal<
// // Type 'false' does not satisfy the constraint 'true'.
// //       AttributeGetters,
// //       {
// //         firstName: () => string;
// //         lastName: () => string;
// //         age: () => number;
// //       }
// //     >
// //   >,
// // ];

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}

type AttributeGetters = {
    [K in keyof Attributes]: () => Attributes[K];
};
