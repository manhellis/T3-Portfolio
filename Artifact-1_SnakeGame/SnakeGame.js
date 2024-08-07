class SnakeGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.gridSize = 15;
        this.cellSize = this.canvas.width / this.gridSize;
        this.currentDirection = "right";
        this.gameState = true;
        this.tailLen = 0;
        this.boxPosX = (this.canvas.width / this.gridSize) * 3;
        this.boxPosY = (this.canvas.height / this.gridSize) * 7;
        this.appleX = (this.canvas.width / this.gridSize) * 9;
        this.appleY = (this.canvas.height / this.gridSize) * 7;
        this.tailArr = [];
        this.gameCycle = null;

        window.addEventListener("keydown", this.runControls.bind(this));
    }

    drawGrid() {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.gridSize; i++) {
            let xCoord = this.cellSize * i;
            this.ctx.beginPath();
            this.ctx.moveTo(xCoord, 0);
            this.ctx.lineTo(xCoord, this.canvas.height);
            this.ctx.closePath();
            this.ctx.stroke();

            let yCoord = this.cellSize * i;
            this.ctx.beginPath();
            this.ctx.moveTo(0, yCoord);
            this.ctx.lineTo(this.canvas.width, yCoord);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }

    drawRandomApple() {
        this.appleX = Math.floor(Math.random() * this.gridSize) * this.cellSize;
        this.appleY = Math.floor(Math.random() * this.gridSize) * this.cellSize;
        this.drawApple(this.appleX, this.appleY);
    }

    drawApple(x, y) {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
    }
    moveSnake(x, y) {
        this.tailArr.unshift([this.boxPosX,this.boxPosY]) // log last pos to front
        
        // if(tailArr.length > 1) {
        //     tailArr.pop();
        // }
        
        
        // input varification (restrain to grid)
        if (this.boxPosX + (x * this.cellSize) >= (this.canvas.width)||
         this.boxPosY + (y * this.cellSize) >= (this.canvas.height) ||
         this.boxPosX + (x * this.cellSize) < 0 ||
         this.boxPosY + (y * this.cellSize) < 0
         ){
            console.log("going off grid...")
            this.gameState = false;
            return;
        }
        
        //move box - order matters.. unsure how to improve yet
        document.querySelector("#aStatus").innerText = "arr en: " + this.tailArr.length;
        this.ctx.clearRect(this.boxPosX,this.boxPosY,this.cellSize,this.cellSize) 
        this.boxPosX += (x * this.cellSize);// new pos
        this.boxPosY += (y * this.cellSize);
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.boxPosX,this.boxPosY,this.cellSize,this.cellSize);
        // tail draw
        this.ctx.fillStyle = "lightGreen";
        if(this.tailLen > 0){ // draw last pos
            this.ctx.fillRect(this.tailArr[0][0],this.tailArr[0][1],this.cellSize,this.cellSize);// draw tail
            //tailArr.pop()
            this.ctx.clearRect(this.tailArr[this.tailLen][0],this.tailArr[this.tailLen][1],this.cellSize,this.cellSize)
        }
           
    }

    runControls(e) {
        switch (e.code) {
            case "KeyW":
                this.currentDirection = "up";
                break;
            case "KeyA":
                this.currentDirection = "left";
                break;
            case "KeyS":
                this.currentDirection = "down";
                break;
            case "KeyD":
                this.currentDirection = "right";
                break;
            default:
                break;
        }
    }
    checkCollisions() {
        // Check for wall collision
        if (
            this.boxPosX < 0 ||
            this.boxPosX >= this.canvas.width ||
            this.boxPosY < 0 ||
            this.boxPosY >= this.canvas.height
        ) {
            this.gameState = false;
        }

        // Check for collision with self ( doesnt work )
        // for (let i = 0; i < this.tailArr.length; i++) {
        //     if (
        //         this.boxPosX === this.tailArr[i][0] &&
        //         this.boxPosY === this.tailArr[i][1]
        //     ) {
        //         this.gameState = false;
        //     }
        // }

        // Check for apple collision
        if (this.boxPosX === this.appleX && this.boxPosY === this.appleY) {
            this.tailLen++;
            this.drawRandomApple();
        }
    }

    runGame() {
        if (!this.gameState) {
            this.stopGame();
            alert("Game Over!");
            return;
        }

        this.checkCollisions();

        switch (this.currentDirection) {
            case "up":
                this.moveSnake(0, -1);
                break;
            case "left":
                this.moveSnake(-1, 0);
                break;
            case "down":
                this.moveSnake(0, 1);
                break;
            case "right":
                this.moveSnake(1, 0);
                break;
            default:
                break;
        }

        this.drawGrid();
    }

    initGame() {
        this.drawGrid();
        this.drawApple(this.appleX, this.appleY);
    }

    startGame() {
        this.initGame();
        this.gameCycle = setInterval(() => this.runGame(), 500);
    }

    stopGame() {
        clearInterval(this.gameCycle);
    }
}
const snakeGame = new SnakeGame("snakeCanvas");
document.querySelector("#startButton").addEventListener("click", () => snakeGame.startGame())
