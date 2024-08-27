// const getRectangleArea = (rectangle: { width: number; height: number }) => {
//     return rectangle.width * rectangle.height;
// };

// const getRectanglePerimeter = (rectangle: {
//     width: number;
//     height: number;
// }) => {
//     return 2 * (rectangle.width + rectangle.height);
// };

type Rectangle = { width: number; height: number };

function getRectangleArea(rectangle: Rectangle) {
    return rectangle.width * rectangle.height;
}

function getRectanglePerimeter(rectangle: Rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}
