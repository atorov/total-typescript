// type Result<TResult, TError> =
//     | {
//           success: true;
//           data: TResult;
//       }
//     | {
//           success: false;
//           error: TError;
//       };

// const createRandomNumber = (): Result<number> => {
//     // Generic type 'Result' requires 2 type argument(s).
//     const num = Math.random();

//     if (num > 0.5) {
//         return {
//             success: true,
//             data: 123,
//         };
//     }

//     return {
//         success: false,
//         error: new Error('Something went wrong'),
//     };
// };

type Result<TResult, TError = Error> =
    | {
          success: true;
          data: TResult;
      }
    | {
          success: false;
          error: TError;
      };

const createRandomNumber = (): Result<number> => {
    const num = Math.random();

    if (num > 0.5) {
        return {
            success: true,
            data: 123,
        };
    }

    return {
        success: false,
        error: new Error('Something went wrong'),
    };
};
