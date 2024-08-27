// class CanvasNode {}

// it("Should store some basic properties", () => {
//   const canvasNode = new CanvasNode();

//   expect(canvasNode.x).toEqual(0);
// Property 'x' does not exist on type 'CanvasNode'.
//   expect(canvasNode.y).toEqual(0);
// Property 'y' does not exist on type 'CanvasNode'.

//   // @ts-expect-error Property is readonly
//   canvasNode.x = 10;

//   // @ts-expect-error Property is readonly
//   canvasNode.y = 20;
// });

class CanvasNode {
    constructor(readonly x?: number, readonly y?: number) {}
}

const canvasNode = new CanvasNode();

canvasNode.x;
canvasNode.y;

// @ts-expect-error Property is readonly
canvasNode.x = 10;

// @ts-expect-error Property is readonly
canvasNode.y = 20;
