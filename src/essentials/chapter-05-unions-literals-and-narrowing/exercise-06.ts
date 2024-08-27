// const somethingDangerous = () => {
//   if (Math.random() > 0.5) {
//     throw new Error('Something went wrong')
//   }

//   return 'all good'
// }

// try {
//   somethingDangerous()
// } catch (error) {
//   if (true) {
//     console.error(error.message)
// 'error' is of type 'unknown'.
//   }
// }

function somethingDangerous() {
    if (Math.random() > 0.5) {
        throw new Error('Something went wrong');
    }

    return 'all good';
}

try {
    somethingDangerous();
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
