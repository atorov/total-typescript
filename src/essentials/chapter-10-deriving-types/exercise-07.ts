// const makeQuery = (
//     url: string,
//     opts?: {
//         method?: string;
//         headers?: {
//             [key: string]: string;
//         };
//         body?: string;
//     }
// ) => {};

// type MakeQueryParameters = [
//     string,
//     {
//         method?: string;
//         headers?: {
//             [key: string]: string;
//         };
//         body?: string;
//     }?
// ];

function makeQuery(
    url: string,
    opts?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
    }
) {
    // ...
}

type MakeQueryParameters = [string, Parameters<typeof makeQuery>[1]];
