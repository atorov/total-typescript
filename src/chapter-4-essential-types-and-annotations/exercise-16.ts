// export function concatenate(...strings) {
// Rest parameter 'strings' implicitly has an 'any[]' type.
//   return strings.join("");
// }

export function concatenate(...strings: string[]) {
    return strings.join('');
}
