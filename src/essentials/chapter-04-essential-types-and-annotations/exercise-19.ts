// const acceptsCallback = (callback: () => undefined) => {
//     callback();
// };

// const returnString = () => {
//   return "Hello!";
// };

// acceptsCallback(returnString);
// Argument of type '() => string' is not assignable to parameter of type '() => undefined'.
//   Type 'string' is not assignable to type 'undefined'.

function acceptsCallback(callback: () => void) {
    callback();
}

function returnString() {
    return 'Hello!';
}

acceptsCallback(returnString);
