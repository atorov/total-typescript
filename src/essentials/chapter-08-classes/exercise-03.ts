// class CanvasNode {
//     x: number;
//     y: number;

//     constructor(position?: { x: number; y: number }) {
//         this.x = position?.x ?? 0;
//         this.y = position?.y ?? 0;
//     }

//     move(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// it("Should be able to move", () => {
//   const canvasNode = new CanvasNode();

//   expect(canvasNode.position).toEqual({ x: 0, y: 0 });
// Property 'position' does not exist on type 'CanvasNode'.

//   canvasNode.move(10, 20);

//   expect(canvasNode.position).toEqual({ x: 10, y: 20 });
// Property 'position' does not exist on type 'CanvasNode'.
// });

// it("Should be able to receive an initial position", () => {
//   const canvasNode = new CanvasNode({
//     x: 10,
//     y: 20,
//   });

//   expect(canvasNode.position).toEqual({ x: 10, y: 20 });
// Property 'position' does not exist on type 'CanvasNode'.
// });

class CanvasNode {
    x: number;
    y: number;

    constructor(position?: { x: number; y: number }) {
        this.x = position?.x ?? 0;
        this.y = position?.y ?? 0;
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get position() {
        return { x: this.x, y: this.y };
    }
}

const canvasNode = new CanvasNode();

canvasNode.position;

canvasNode.move(10, 20);
