// type AbsoluteRoute = string;

// const goToRoute = (route: AbsoluteRoute) => {
//     // ...
// };

// goToRoute('/home');
// goToRoute('/about');
// goToRoute('/contact');

// goToRoute(
//   // @ts-expect-error
//   // Unused '@ts-expect-error' directive.
//   "somewhere",
// );

type AbsoluteRoute = `/${string}`;

const goToRoute = (route: AbsoluteRoute) => {
    // ...
};

goToRoute('/home');
goToRoute('/about');
goToRoute('/contact');

goToRoute(
    // @ts-expect-error
    'somewhere'
);
