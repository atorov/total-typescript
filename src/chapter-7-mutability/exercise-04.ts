// const fetchData = async () => {
//     const result = await fetch('/');

//     if (!result.ok) {
//         return [new Error('Could not fetch data.')];
//     }

//     const data = await result.json();

//     return [undefined, data];
// };

// async () => {
//   const [error, data] = await fetchData();

//   type Tests = [
//     Expect<Equal<typeof error, Error | undefined>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof data, any>>,
//   ];
// };

async function fetchData<Data>() {
    const result = await fetch('/');

    if (!result.ok) {
        return [new Error('Could not fetch data.')] as const;
    }

    const data = (await result.json()) as Data;

    return [undefined, data] as const;
}

async () => {
    const [error, data] = await fetchData();
};
