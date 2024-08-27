// type APIResponse = [string, User[] | string];

// async function fetchData(): Promise<APIResponse> {
//     try {
//         const response = await fetch('https://api.example.com/data');

//         if (!response.ok) {
//             return [
//                 'error',
//                 // Imagine some improved error handling here
//                 'An error occurred',
//             ];
//         }

//         const data = await response.json();

//         return ['success', data];
//     } catch (error) {
//         return ['error', 'An error occurred'];
//     }
// }

type User = unknown;

type ApiSuccess = [status: 'success', data: User[]];

type ApiError = [status: 'error', message: string];

type APIResponse = ApiSuccess | ApiError;

async function fetchData(): Promise<APIResponse> {
    try {
        const response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            return ['error', 'An error occurred'];
        }

        const data: User[] = await response.json();

        return ['success', data];
    } catch (error) {
        return ['error', 'An error occurred'];
    }
}

(async () => {
    const [status, value] = await fetchData();
})();
