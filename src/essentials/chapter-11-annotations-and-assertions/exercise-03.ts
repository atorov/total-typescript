// const configurations = {
//   development: {
//     apiBaseUrl: "http://localhost:8080",
//     timeout: 5000,
//   },
//   production: {
//     apiBaseUrl: "https://api.example.com",
//     timeout: 10000,
//   },
//   staging: {
//     apiBaseUrl: "https://staging.example.com",
//     timeout: 8000,
//     // @ts-expect-error
// Unused '@ts-expect-error' directive.
//     notAllowed: true,
//   },
// };
//
// type Environment = keyof typeof configurations;

const configurations = {
    development: {
        apiBaseUrl: 'http://localhost:8080',
        timeout: 5000,
    },
    production: {
        apiBaseUrl: 'https://api.example.com',
        timeout: 10000,
    },
    staging: {
        apiBaseUrl: 'https://staging.example.com',
        timeout: 8000,
        // @ts-expect-error
        notAllowed: true,
    },
} satisfies Record<string, { apiBaseUrl: string; timeout: number }>;

type Environment = keyof typeof configurations;
