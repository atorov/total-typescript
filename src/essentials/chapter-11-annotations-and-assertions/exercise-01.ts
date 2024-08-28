// @lib: dom,es2023,dom.iterable
// @errors: 2345

// const handleFormData = (e: SubmitEvent) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const value = Object.fromEntries(data.entries());
//     return value;
// };

function handleFormData(e: SubmitEvent) {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    const value = Object.fromEntries(data.entries());

    return value;
}
