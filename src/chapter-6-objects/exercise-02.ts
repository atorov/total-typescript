// type User = {
//     id: string;
//     createdAt: Date;
//     name: string;
//     email: string;
// };

// type Product = {
//     id: string;
//     createdAt: Date;
//     name: string;
//     price: number;
// };

interface BaseEntity {
    id: string;
    createdAt: Date;
}

interface WithName {
    name: string;
}

interface User extends BaseEntity, WithName {
    email: string;
}

interface Product extends BaseEntity, WithName {
    price: number;
}
