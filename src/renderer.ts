class Renderer {
    canvas: HTMLCanvasElement;
    ctx : CanvasRenderingContext2D;
    constructor() {
    }

    init(root: HTMLElement) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = GRID_SIZE * PART_SIZE;
        this.canvas.height = GRID_SIZE * PART_SIZE;
        this.ctx = this.canvas.getContext('2d');

        root.appendChild(this.canvas);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setBackgroundColor(color: string) {
        this.canvas.style.backgroundColor = color;
    }

    drawSquare(x: number, y: number, width: number, height: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    drawCircle(x: number, y: number, radius: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
}