interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const updateProduct = (
    id: number,
    productInfo: Partial<Omit<Product, 'id'>>
) => {
    // Do something with the productInfo
};
