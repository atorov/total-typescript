// const handleFormData = (e: any) => {
//     e.preventDefault();
//     const data = new FormData(e.terget);
//     const value = Object.fromEntries(data.entries());
//     return value;
// };

declare namespace React {
    export type FormEvent = {
        preventDefault: () => void;
        target: HTMLFormElement;
    };
}

function handleFormData(e: React.FormEvent) {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data.entries());

    return value;
}
