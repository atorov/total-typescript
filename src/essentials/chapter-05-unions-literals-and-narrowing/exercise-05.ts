// type APIResponse =
//     | {
//           data: {
//               id: string;
//           };
//       }
//     | {
//           error: string;
//       };

// const handleResponse = (response: APIResponse) => {
//     // How do we check if 'data' is in the response?

//     if (true) {
//         return response.data.id;
//     } else {
//     }
// };

type APIResponse =
    | {
          data: {
              id: string;
          };
      }
    | {
          error: string;
      };

function handleResponse(response: APIResponse) {
    if ('data' in response) {
        return response.data.id;
    }

    throw new Error(response.error);
}
