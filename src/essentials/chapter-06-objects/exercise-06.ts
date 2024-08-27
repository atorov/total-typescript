// const hasKey = (obj: object, key: string) => {
//     return obj.hasOwnProperty(key);
// };

function hasKey(obj: object, key: PropertyKey) {
    return obj.hasOwnProperty(key);
}
