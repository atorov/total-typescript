// const uniqueArray = (arr: any[]) => {
//     return Array.from(new Set(arr));
// };

// // it('returns an array of unique values', () => {
// //     const result = uniqueArray([1, 1, 2, 3, 4, 4, 5]);

// //     type test = Expect<Equal<typeof result, number[]>>;
// //     // Type 'false' does not satisfy the constraint 'true'.

// //     expect(result).toEqual([1, 2, 3, 4, 5]);
// // });

// // it('should work on strings', () => {
// //     const result = uniqueArray(['a', 'b', 'b', 'c', 'c', 'c']);

// //     type test = Expect<Equal<typeof result, string[]>>;
// //     // Type 'false' does not satisfy the constraint 'true'.

// //     expect(result).toEqual(['a', 'b', 'c']);
// // });

function uniqueArray<T>(arr: T[]) {
    return Array.from<T>(new Set(arr));
}
