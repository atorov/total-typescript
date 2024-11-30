// const createStringMap = () => {
//     return new Map();
// };

// const numberMap = createStringMap<number>();
// // Expected 0 type arguments, but got 1.

// numberMap.set('foo', 123);

// const objMap = createStringMap<{ a: number }>();
// // Expected 0 type arguments, but got 1.

// objMap.set('foo', { a: 123 });

// objMap.set(
//     'bar',
//     // @ts-expect-error
//     // Unused '@ts-expect-error' directive.
//     { b: 123 }
// );

// const unknownMap = createStringMap();

// // type test = Expect<Equal<typeof unknownMap, Map<string, unknown>>>;
// // Type 'false' does not satisfy the constraint 'true'.

function createStringMap<T = unknown>() {
    return new Map<string, T>();
}

const numberMap = createStringMap<number>();
numberMap.set('foo', 123);

const objMap = createStringMap<{ a: number }>();
objMap.set('foo', { a: 123 });
objMap.set(
    'bar',
    // @ts-expect-error
    { b: 123 }
);

const unknownMap = createStringMap();
