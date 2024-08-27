// type ViewMode = "hidden" | "visible" | "selected";

// class CanvasNode {
//   x = 0;
//   y = 0;
//   viewMode: ViewMode = "visible";

//   constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
//     this.x = options?.x ?? 0;
//     this.y = options?.y ?? 0;
//     this.viewMode = options?.viewMode ?? "visible";
//   }

//   /* getter, setter, and move methods as before */
// }

abstract class Shape {
    abstract get position(): { x: number; y: number };

    abstract set position(p);

    abstract move(x: number, y: number): void;
}

type ViewMode = 'hidden' | 'visible' | 'selected';

class CanvasNode extends Shape {
    private x = 0;
    private y = 0;

    viewMode: ViewMode = 'visible';

    constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
        super();

        this.x = options?.x ?? 0;
        this.y = options?.y ?? 0;

        this.viewMode = options?.viewMode ?? 'visible';
    }

    get position() {
        return { x: this.x, y: this.y };
    }

    set position(position) {
        this.x = position.x;
        this.y = position.y;
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const canvasNode = new CanvasNode();

canvasNode.position;

canvasNode.position = { x: 10, y: 20 };

canvasNode.move(10, 20);
