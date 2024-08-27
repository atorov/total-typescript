// type ButtonAttributes = {
//   type: "button" | "submit" | "reset";
// };

// const modifyButtons = (attributes: ButtonAttributes[]) => {};

// const buttonsToChange = [
//   {
//     type: "button",
//   },
//   {
//     type: "submit",
//   },
// ];

// modifyButtons(buttonsToChange);
// Argument of type '{ type: string; }[]' is not assignable to parameter of type 'ButtonAttributes[]'.
//   Type '{ type: string; }' is not assignable to type 'ButtonAttributes'.
//     Types of property 'type' are incompatible.
//       Type 'string' is not assignable to type '"button" | "submit" | "reset"'.

type ButtonAttributes = {
    type: 'button' | 'submit' | 'reset';
};

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
    {
        type: 'button',
    } as const,
    {
        type: 'submit',
    } as const,
];

modifyButtons(buttonsToChange);
