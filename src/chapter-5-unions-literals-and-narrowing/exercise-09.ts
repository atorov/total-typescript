// type Circle = {
//     kind: 'circle';
//     radius: number;
// };

// type Square = {
//     kind: 'square';
//     sideLength: number;
// };

// type Shape = Circle | Square;

// function calculateArea({kind, radius, sideLength}: Shape) {
// Property 'sideLength' does not exist on type 'Shape'.
// Property 'radius' does not exist on type 'Shape'.
//   if (kind === 'circle') {
//     return Math.PI * radius * radius
//   } else {
//     return sideLength * sideLength
//   }
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
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }

    return shape.sideLength * shape.sideLength;
}
