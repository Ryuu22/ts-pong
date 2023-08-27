

class GameManager {
    renderer: Renderer;
    snake: Snake = new Snake();
    grid: Grid;
    fruit: Fruit;
    started: boolean = false;
    
    scoreElement: HTMLElement;
    titleElement: HTMLElement;

    constructor() {
        this.renderer = new Renderer();
        this.grid = new Grid(GRID_SIZE);
    }

    inputHandler(event: KeyboardEvent) {
        if(!this.started) {
            this.started = true;
        }
        this.snake.changeDirection(event);
    }
    
    init(root: HTMLElement) {
        this.renderer.init(root);
        this.renderer.setBackgroundColor('#000000');

        this.fruit = new Fruit(new Vector2(5, 5).random(0, GRID_SIZE));

        root.append(this.setScoreElement());

        //root.append(this.setTitleElement());

        setInterval(() => {
            if(!this.started) {
                return
            }
            this.update();
        }, 1000/ 12);
    }

    private setTitleElement() {
        //Create html element to display title
        this.titleElement = document.createElement('div');
        this.titleElement.id = 'title';
        this.titleElement.style.color = '#ffffff';
        this.titleElement.style.fontSize = '24px';
        this.titleElement.style.fontFamily = 'Arial';
        this.titleElement.style.position = 'absolute';
        this.titleElement.style.top = '0';
        this.titleElement.style.left = '0';
        this.titleElement.style.padding = '16px';
        this.titleElement.innerHTML = 'Snake \n Use arrow keys to move \n Press any key to start';
        return this.titleElement;
    }

    private setScoreElement() {
        //Create html element to display score
        this.scoreElement = document.createElement('div');
        this.scoreElement.id = 'score';
        this.scoreElement.style.color = '#ffffff';
        this.scoreElement.style.fontSize = '24px';
        this.scoreElement.style.fontFamily = 'Arial';
        this.scoreElement.style.position = 'absolute';
        this.scoreElement.style.top = '0';
        this.scoreElement.style.right = '0';
        this.scoreElement.style.padding = '16px';
        this.scoreElement.innerHTML = `Score: ${this.snake.parts.length - 1}`;
        return this.scoreElement;
    }

    private updateScore() {
        this.scoreElement.innerHTML = `Score: ${this.snake.parts.length - 1}`;
    }

    update() {
        // UPDATE LOGIC
        this.snake.move();
        this.updateScore();

        if(this.snake.parts[0].position.x == this.fruit.x && this.snake.parts[0].position.y == this.fruit.y) { 
            this.snake.queuedPart = true;
            this.fruit = new Fruit(new Vector2(5, 5).random(0, GRID_SIZE));
        };

        this.renderer.clearCanvas();
        // DRAW LOGIC
        this.fruit.draw(this.renderer);
        this.grid.drawGrid(this.renderer);
        this.snake.draw(this.renderer);
    }
}

const gm : GameManager = new GameManager();
gm.init(document.getElementById('root'));


document.addEventListener('keydown', (event) => {
    event.preventDefault();
    gm.inputHandler(event);
});
