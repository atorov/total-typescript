// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     return data;
// }

// const example = async () => {
//   const data = await fetchData();
//   type test = Expect<Equal<typeof data, number>>;
// Type 'false' does not satisfy the constraint 'true'.
// };

async function fetchData() {
    const response = await fetch('https://api.example.com/data');

    const data: number = await response.json();

    return data;
}

async function example() {
    const data = await fetchData();
    // ...
}
