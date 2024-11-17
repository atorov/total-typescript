// type Event = 'click' | 'hover' | 'scroll';

// type CallbackType = unknown;

// const listenToEvent = (callback: CallbackType) => {};

// listenToEvent(() => {});

// listenToEvent((event) => {
// Parameter 'event' implicitly has an 'any' type.
//   type tests = [Expect<Equal<typeof event, Event>>];
// Type 'false' does not satisfy the constraint 'true'.
// });

// listenToEvent((event, x, y) => {
// Parameter 'y' implicitly has an 'any' type.
// Parameter 'x' implicitly has an 'any' type.
// Parameter 'event' implicitly has an 'any' type.
//   // red squiggly line under event, x, and y
//   type tests = [
//     Expect<Equal<typeof event, Event>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof x, number>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof y, number>>,
// Type 'false' does not satisfy the constraint 'true'.
//   ];
// });

// listenToEvent((event, x, y, screenId) => {
// Parameter 'screenId' implicitly has an 'any' type.
// Parameter 'y' implicitly has an 'any' type.
// Parameter 'x' implicitly has an 'any' type.
// Parameter 'event' implicitly has an 'any' type.
//   // red squiggly line under event, x, y, and screenId
//   type tests = [
//     Expect<Equal<typeof event, Event>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof x, number>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof y, number>>,
// Type 'false' does not satisfy the constraint 'true'.
//     Expect<Equal<typeof screenId, number>>,
// Type 'false' does not satisfy the constraint 'true'.
//   ];
// });

type Event = 'click' | 'hover' | 'scroll';

type CallbackType = (
    event: Event,
    x: number,
    y: number,
    screenId: number
) => void;

const listenToEvent = (callback: CallbackType) => {};

listenToEvent(() => {});

listenToEvent((event) => {});

listenToEvent((event, x, y) => {});

listenToEvent((event, x, y, screenId) => {});
