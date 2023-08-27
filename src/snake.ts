
class Snake {
    parts: SnakePart[] = [];
    queuedPart: boolean = false;
    direction: Direction = Direction.Right;

    constructor() {
        this.parts.push(new SnakePart(new Vector2(5, 5)));
    }

    addPart() {
        let position = new Vector2(this.parts[this.parts.length - 1].position.x, this.parts[this.parts.length - 1].position.y);
        this.parts.push(new SnakePart(position));
        this.queuedPart = false;
    }

    changeDirection(event: KeyboardEvent) {
        switch(event.code) {
            case 'ArrowUp':
                this.direction = Direction.Up;
                break;
            case 'ArrowDown':
                this.direction = Direction.Down;
                break;
            case 'ArrowLeft':
                this.direction = Direction.Left;
                break;
            case 'ArrowRight':
                this.direction = Direction.Right;
                break;
        }
    }

    move() {
        for(let i = this.parts.length - 1; i > 0; i--) {
            console.log(this.parts[i].position);
            this.parts[i].position = new Vector2(this.parts[i - 1].position.x, this.parts[i - 1].position.y);
        }

        const head : SnakePart = this.parts[0];
        switch (this.direction) {
            case Direction.Up:
                head.position.y -= 1;
                break;
            case Direction.Down:
                head.position.y += 1;
                break;
            case Direction.Left:
                head.position.x -= 1;
                break;
            case Direction.Right:
                head.position.x += 1;
                break;
        }

        if(head.position.x < 0) {
            head.position.x = GRID_SIZE - 1;
        }
        else if(head.position.x > GRID_SIZE - 1) {
            head.position.x = 0;
        }
        if(head.position.y < 0) {
            head.position.y = GRID_SIZE - 1;
        }
        else if(head.position.y > GRID_SIZE - 1) {
            head.position.y = 0;
        }

        if(this.queuedPart) {
            this.addPart();
        }
    }

    draw(renderer: Renderer) {
        for(let i = 0; i < this.parts.length; i++) {
            let part : SnakePart = this.parts[i];
            renderer.drawSquare(part.position.x * PART_SIZE, part.position.y * PART_SIZE, PART_SIZE, PART_SIZE, '#ffffff');
        }
    }
}