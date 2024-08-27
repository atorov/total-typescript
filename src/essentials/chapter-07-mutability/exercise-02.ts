// function printNames(names: string[]) {
//   for (const name of names) {
//     console.log(name);
//   }

//   // @ts-expect-error
// Unused '@ts-expect-error' directive.
//   names.push("John");

//   // @ts-expect-error
// Unused '@ts-expect-error' directive.
//   names[0] = "Billy";
// }

function printNames(names: readonly string[]) {
    for (const name of names) {
        console.log(name);
    }

    // @ts-expect-error
    names.push('John');

    // @ts-expect-error
    names[0] = 'Billy';
}
