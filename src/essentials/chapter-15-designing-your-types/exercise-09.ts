// interface Attributes {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// type AttributeGetters = unknown;

// type tests = [
//   Expect<
//     Equal<
//       AttributeGetters,
//       {
//         getFirstName: () => string;
//         getLastName: () => string;
//         getAge: () => number;
//       }
//     >
//   >,
// ];

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}

type AttributeGetters = {
    [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};
