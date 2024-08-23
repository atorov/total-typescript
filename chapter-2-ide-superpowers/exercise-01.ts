const acceptsObj = (obj: { foo: string; bar: number; baz: boolean }) => {};

acceptsObj({
    // Autocomplete in here!
    bar: 42,
    baz: true,
    foo: 'string',
});
