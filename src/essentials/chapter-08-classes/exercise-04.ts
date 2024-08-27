// class CanvasNode {
//     #x: number;
//     #y: number;

//     constructor(position?: { x: number; y: number }) {
//         this.#x = position?.x ?? 0;
//         this.#y = position?.y ?? 0;
//     }

//     // your `position` getter method here

//     // move method as before
// }

// canvasNode.position = { x: 10, y: 20 };

class CanvasNode {
    #x: number;
    #y: number;

    constructor(position?: { x: number; y: number }) {
        this.#x = position?.x ?? 0;
        this.#y = position?.y ?? 0;
    }

    get position() {
        return { x: this.#x, y: this.#y };
    }

    set position(position) {
        this.#x = position.x;
        this.#y = position.y;
    }

    move(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }
}

const canvasNode = new CanvasNode();

canvasNode.position;

canvasNode.position = { x: 10, y: 20 };

canvasNode.move(10, 20);
