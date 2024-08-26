// function validateUsername(username: string | null): boolean {
//   return username.length > 5
// 'username' is possibly 'null'.

//   return false
// }

function validateUsername(username: string | null): boolean {
    const hasUsername = typeof username === 'string';

    return hasUsername ? username.length > 5 : false;
}
