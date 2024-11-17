// const acceptAnythingExceptNullOrUndefined = (input) => {};
// Parameter 'input' implicitly has an 'any' type.

// acceptAnythingExceptNullOrUndefined("hello");
// acceptAnythingExceptNullOrUndefined(42);
// acceptAnythingExceptNullOrUndefined(true);
// acceptAnythingExceptNullOrUndefined(Symbol("foo"));
// acceptAnythingExceptNullOrUndefined({});
// acceptAnythingExceptNullOrUndefined([]);
// acceptAnythingExceptNullOrUndefined(() => {});
// acceptAnythingExceptNullOrUndefined(/foo/);
// acceptAnythingExceptNullOrUndefined(new Error("foo"));

// acceptAnythingExceptNullOrUndefined(
//   // @ts-expect-error
// Unused '@ts-expect-error' directive.
//   null,
// );
// acceptAnythingExceptNullOrUndefined(
//   // @ts-expect-error
// Unused '@ts-expect-error' directive.
//   undefined,
// );

const acceptAnythingExceptNullOrUndefined = (input: {}) => {};

acceptAnythingExceptNullOrUndefined('hello');
acceptAnythingExceptNullOrUndefined(42);
acceptAnythingExceptNullOrUndefined(true);
acceptAnythingExceptNullOrUndefined(Symbol('foo'));
acceptAnythingExceptNullOrUndefined({});
acceptAnythingExceptNullOrUndefined([]);
acceptAnythingExceptNullOrUndefined(() => {});
acceptAnythingExceptNullOrUndefined(/foo/);
acceptAnythingExceptNullOrUndefined(new Error('foo'));

acceptAnythingExceptNullOrUndefined(
    // @ts-expect-error
    null
);
acceptAnythingExceptNullOrUndefined(
    // @ts-expect-error
    undefined
);
