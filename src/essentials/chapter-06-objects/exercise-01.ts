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

type BaseEntity = {
    id: string;
    createdAt: Date;
    name: string;
};

type User = BaseEntity & {
    email: string;
};

type Product = BaseEntity & {
    price: number;
};
