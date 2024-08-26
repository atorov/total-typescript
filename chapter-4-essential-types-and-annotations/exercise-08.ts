// type ShoppingCart = {
//   userId: string;
// };

// const processCart = (cart: ShoppingCart) => {
//   // Do something with the cart in here
// };

// processCart({
//   userId: "user123",
//   items: ["item1", "item2", "item3"],
// Object literal may only specify known properties, and 'items' does not exist in type 'ShoppingCart'.
// });

type ShoppingCart = {
    userId: string;
    items: string[];
};

function processCart(cart: ShoppingCart) {
    // Do something with the cart in here
}

processCart({
    userId: 'user123',
    items: ['item1', 'item2', 'item3'],
});
