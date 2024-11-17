// interface FetchOptions {
//   url: string;
//   method?: string;
//   headers?: Record<string, string>;
//   body?: string;
// }

// const options = {
//     url: '/',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     // @ts-expect-error
//     // Unused '@ts-expect-error' directive.
//     search: new URLSearchParams({
//         limit: '10',
//     }),
// };

// const myFetch = async (options: FetchOptions) => {};

// myFetch(options);

interface FetchOptions {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

const options1: FetchOptions = {
    url: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    // @ts-expect-error
    search: new URLSearchParams({
        limit: '10',
    }),
};

const options2 = {
    url: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    // @ts-expect-error
    search: new URLSearchParams({
        limit: '10',
    }),
} satisfies FetchOptions;

const myFetch = async (options: FetchOptions) => {};

myFetch(options1);
myFetch(options2);
myFetch({
    url: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    // @ts-expect-error
    search: new URLSearchParams({
        limit: '10',
    }),
});
