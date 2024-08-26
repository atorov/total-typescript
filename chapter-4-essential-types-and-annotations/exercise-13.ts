// const parsedData = JSON.parse<{
// Expected 0 type arguments, but got 1.
//   name: string;
//   age: number;
// }>('{"name": "Alice", "age": 30}');

const parsedData: {
    name: string;
    age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');
