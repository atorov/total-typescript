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

type Result<
    TResult,
    TError extends { message: string; code?: number } = Error
> =
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

type BadExample = Result<
    { id: string },
    // @ts-expect-error Should be an object with a message property
    // Unused '@ts-expect-error' directive.
    string
>;

type GoodExample = Result<{ id: string }, TypeError>;
type GoodExample2 = Result<{ id: string }, { message: string; code: number }>;
type GoodExample3 = Result<{ id: string }, { message: string }>;
type GoodExample4 = Result<{ id: string }>;
