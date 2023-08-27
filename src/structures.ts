const PART_SIZE : number = 32;
const GRID_SIZE : number = 12;

enum Direction {
    Up,
    Down,
    Left,
    Right
}

class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    };

    random(min: number, max: number): Vector2 {
        this.x = Math.floor(Math.random() * (max - min)) + min;
        this.y = Math.floor(Math.random() * (max - min)) + min;
        return this;
    }
}

class SnakePart {
    position: Vector2;
    constructor(position: Vector2) {
        this.position = position;
    }
}

class Fruit {
    x: number;
    y: number;
    constructor(position : Vector2) {
        console.log('Fruit created');
        this.x = position.x;
        this.y = position.y;
    }

    draw(renderer: Renderer) {
        renderer.drawCircle(this.x * PART_SIZE + PART_SIZE / 2, this.y * PART_SIZE + PART_SIZE / 2, PART_SIZE / 2, '#ff0000');
    }
}
