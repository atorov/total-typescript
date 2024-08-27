// class CanvasNode {
//     x = 0;
//     y = 0;
// }

// it("Should be able to move to a new location", () => {
//   const canvasNode = new CanvasNode();

//   expect(canvasNode.x).toEqual(0);
//   expect(canvasNode.y).toEqual(0);

//   canvasNode.move(10, 20);
// Property 'move' does not exist on type 'CanvasNode'.

//   expect(canvasNode.x).toEqual(10);
//   expect(canvasNode.y).toEqual(20);
// });

class CanvasNode {
    x = 0;
    y = 0;

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const canvasNode = new CanvasNode();

canvasNode.move(10, 20);
