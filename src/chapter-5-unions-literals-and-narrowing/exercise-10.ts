// function calculateArea(shape: Shape) {
//     if (shape.kind === 'circle') {
//         return Math.PI * shape.radius * shape.radius;
//     } else {
//         return shape.sideLength * shape.sideLength;
//     }
// }

type Circle = {
    kind: 'circle';
    radius: number;
};

type Square = {
    kind: 'square';
    sideLength: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * shape.radius;

        default:
            return shape.sideLength * shape.sideLength;
    }
}
