class Grid {
    width: number;
    height: number;
    subDivisions: number = 32;

    constructor(subDivisions: number) {
        this.subDivisions = subDivisions;
    }

    drawGrid(renderer: Renderer) {
        let width: number = renderer.canvas.width;
        let height: number = renderer.canvas.height;

        let subDivWidth: number = width / this.subDivisions;
        let subDivHeight: number = height / this.subDivisions;

        for (let i = 1; i < this.subDivisions; i++) {
            renderer.drawLine(i * subDivWidth, 0, i * subDivWidth, height, '#ffffff');
        }

        for (let i = 1; i < this.subDivisions; i++) {
            renderer.drawLine(0, i * subDivHeight, width, i * subDivHeight, '#ffffff');
        }
    }

}