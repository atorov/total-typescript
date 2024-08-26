// function getUsername(username: string) {
//     if (username !== null) {
//         return `User: ${username}`;
//     } else {
//         return 'Guest';
//     }
// }

function getUsername(username: string | null) {
    if (username !== null) {
        return `User: ${username}`;
    } else {
        return 'Guest';
    }
}

getUsername('Alice');

getUsername(null);
