// interface FormValues {
//     name: string;
//     email: string;
//     password: string;
// }

// const inputs: Record<
//     'name' | 'email' | 'password', // change me!
//     {
//         initialValue: string;
//         label: string;
//     }
// > = {
//     name: {
//         initialValue: '',
//         label: 'Name',
//     },
//     email: {
//         initialValue: '',
//         label: 'Email',
//     },
//     password: {
//         initialValue: '',
//         label: 'Password',
//     },
// };

interface FormValues {
    name: string;
    email: string;
    password: string;
}

const inputs: Required<
    Record<
        keyof FormValues,
        {
            initialValue: string;
            label: string;
        }
    >
> = {
    name: {
        initialValue: '',
        label: 'Name',
    },
    email: {
        initialValue: '',
        label: 'Email',
    },
    password: {
        initialValue: '',
        label: 'Password',
    },
};
