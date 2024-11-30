type ErrorShape = {
    error: {
        message: string;
    };
};

type UserDataShape =
    | {
          data: {
              id: string;
              name: string;
              email: string;
          };
      }
    | ErrorShape;

type PostDataShape =
    | {
          data: {
              id: string;
              title: string;
              body: string;
          };
      }
    | ErrorShape;

type DataShape<D extends { id: string }> = { data: D } | ErrorShape;
