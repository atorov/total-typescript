// const goToLocation = (coordinates: Array<number>) => {
//   const latitude = coordinates[0];
//   const longitude = coordinates[1];
//   const elevation = coordinates[2];

//   // Do something with latitude, longitude, and elevation in here

//   type tests = [
//     Expect<Equal<typeof latitude, number>>,
//     Expect<Equal<typeof longitude, number>>,
//     Expect<Equal<typeof elevation, number | undefined>>,
// Type 'false' does not satisfy the constraint 'true'.
//   ];
// };

const goToLocation = (
    coordinates: [lat: number, long: number, elev?: number]
) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];

    // Do something with latitude, longitude, and elevation in here
};
