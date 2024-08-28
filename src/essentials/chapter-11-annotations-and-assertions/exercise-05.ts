// const routes = {
//   "/": {
//     component: "Home",
//   },
//   "/about": {
//     component: "About",
//     // @ts-expect-error
// Unused '@ts-expect-error' directive.
//     search: "?foo=bar",
//   },
// };

// // @ts-expect-error
// Unused '@ts-expect-error' directive.
// routes["/"].component = "About";

// type tests = [
//   Expect<Equal<(typeof routes)["/"]["component"], "Home">>,
// Type 'false' does not satisfy the constraint 'true'.
//   Expect<Equal<(typeof routes)["/about"]["component"], "About">>,
// Type 'false' does not satisfy the constraint 'true'.
// ];

const routes = {
    '/': {
        component: 'Home',
    },
    '/about': {
        component: 'About',
        // @ts-expect-error
        search: '?foo=bar',
    },
} as const satisfies Record<
    string,
    {
        component: 'Home' | 'About';
    }
>;

// @ts-expect-error
routes['/'].component = 'About';
