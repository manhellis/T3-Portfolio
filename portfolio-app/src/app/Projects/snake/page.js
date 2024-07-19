"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import TabContainer from "@/app/components/TabContainer"; // Ensure correct import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlay,
    faCommentDots,
    faFlagCheckered,
} from "@fortawesome/free-solid-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import FullScreenCode from "@/app/components/FullScreenCode";
import { useState } from "react";

const Page = ({ params }) => {
    const [gridCode, setGridCode] = useState(false);
    const grid = `for (let i = 0; i < this.gridSize; i++) {
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
                    }`;

    const tabContent1JSX = (
        <>
            <h1 className={post.h1}>Purpose:</h1>
            <p className={post.p}>
                The goal was to create a snake game without referencing other
                existing concepts. As a first project in JS, it showcases my
                decision-making at an early stage and demonstrates my eagerness
                to learn.
                <ol className={post.ol}>
                    <li>
                        When I was first introduced to JavaScript, I was told a
                        snake game is a great first exercise.
                    </li>
                    <li>
                        I decided to build as much as possible from scratch.
                    </li>
                    <li>
                        I found the starting point to begin with is drawing
                        objects with HTML Canvas
                    </li>
                </ol>
            </p>
            <h1 className={post.h1}>Drawing a grid on a canvas():</h1>
            <p className={post.p}>
                To create a snake game, the basis for the game exists in a 2D
                plane. I needed a way to draw this grid so that I could place
                objects within the grid. The canvas element is a square, 600x600
                pixels. I initialize the size of the cells in the grid to be the
                quotient of the canvas size and the given number of cells per
                side desired. Taking in the parameter x allows this. The grid
                lines are drawn using a simple for loop, where the object ctx is
                a CanvasRenderingContext2D object and acts like a cursor to draw
                in 2D. In the loop, a line is drawn from bottom to top, then
                left to right, placing the cellSize width between them.
            </p>
            {/* <button className={post.link} onClick={()=> setGridCode(!gridCode)}>Show Code</button> */}
            <FullScreenCode code={grid} language="javascript" />
        </>
    );

    const drawing = `drawRandomApple() {
    this.appleX =
        Math.floor(Math.random() * this.gridSize) *
        this.cellSize;
    this.appleY =
        Math.floor(Math.random() * this.gridSize) *
        this.cellSize;
    this.drawApple(this.appleX, this.appleY);
}

drawApple(x, y) {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(x, y, this.cellSize, this.cellSize);
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
}`;
    const tabContent2JSX = (
        <>
            <h1 className={post.h1}>Drawing an Apple:</h1>
            <p className={post.p}>
                An apple is just a filled cell, with width and
                height of cellSize. A random apple uses the Math.floor function
                along with a Math.random to get a random value that lands within
                the dimensions of the game.
            </p>
            <h1 className={post.h1}>Drawing a snake:</h1>
            <p className={post.p}>
                A snake, the player character, is just a box drawn in the center
                to begin.
            </p>
            <h1 className={post.h1}>Controls</h1>
            <p className={post.p}>
                I add an event listener to the window that looks for key down
                user input. It passes this information to the function
                runControls(e): which introduces a switch for WASD cardinal
                movement. Each switch case sets the global variable
                currentDirection to a string with direction. To iteratively make
                sure we are always checking for direction changes, I have a
                runGame(): function that runs while the gameState is true ( if
                the game state should be on ). If the gamestate runs, it should
                check a switch case to determine which direction is being
                pressed and the case refers to which direction the box (player
                character) should move. The runGame function also contains
                collision detection, where if the player is moved into a square
                with the apple, then scoring functionality will occur. It makes
                sense to check on the player move if the apple has been eaten.
                When an apple is eaten, the global variable tailLen is
                incremented by 1.
            </p>
            <FullScreenCode code={drawing} language="javascript" />
        </>
    );
    const tail = `moveSnake(x, y) {
    this.tailArr.unshift([this.boxPosX, this.boxPosY]); // log last pos to front

    // if(tailArr.length > 1) {
    //     tailArr.pop();
    // }

    // input varification (restrain to grid)
    if (
        this.boxPosX + x * this.cellSize >= this.canvas.width ||
        this.boxPosY + y * this.cellSize >=
            this.canvas.height ||
        this.boxPosX + x * this.cellSize < 0 ||
        this.boxPosY + y * this.cellSize < 0
    ) {
        console.log("going off grid...");
        this.gameState = false;
        return;
    }

    //move box - order matters.. unsure how to improve yet
    document.querySelector("#aStatus").innerText =
        "arr en: " + this.tailArr.length;
    this.ctx.clearRect(
        this.boxPosX,
        this.boxPosY,
        this.cellSize,
        this.cellSize
    );
    this.boxPosX += x * this.cellSize; // new pos
    this.boxPosY += y * this.cellSize;
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(
        this.boxPosX,
        this.boxPosY,
        this.cellSize,
        this.cellSize
    );
    // tail draw
    this.ctx.fillStyle = "lightGreen";
    if (this.tailLen > 0) {
        // draw last pos
        this.ctx.fillRect(
            this.tailArr[0][0],
            this.tailArr[0][1],
            this.cellSize,
            this.cellSize
        ); // draw tail
        //tailArr.pop()
        this.ctx.clearRect(
            this.tailArr[this.tailLen][0],
            this.tailArr[this.tailLen][1],
            this.cellSize,
            this.cellSize
        );
    }
}`;
    const tabContent3JSX = (
        <>
            <h1 className={post.h1}>The Snake Tail:</h1>
            <p className={post.p}>
                The function <code>moveSnake(x,y)</code>: moves the player from
                its current position to its next position. Moving the box is
                basically erasing its current position and filling the new
                position. To achieve a tail that propagates the past moves, the
                current position is logged into an array. If the tail array has
                a length longer than 0, it will fill the current position as a
                tail piece, since the new position is where the player is. The
                current position is always at the top of the array, due to the{" "}
                <code>unshift()</code> array method. Simply, the past positions
                will be marked as a tail segment object. To set the length of
                the tail, the tail segment of <code>tailLen</code> is removed.
                This ensures the length of the tail grows as apples are eaten,
                but that the tail segments are attached to the head of the
                player.
            </p>
            <h1 className={post.h1}>Upgrades:</h1>
            <p className={post.p}>
                Functions I’d like to add (or have added):
                <ul className={post.ul}>
                    <li>Game start/stop</li>
                    <li>Custom speed, grid size, colours, icons</li>
                    <li>Animations</li>
                    <li>Class based</li>
                </ul>
            </p>
            <p className={post.p}>
                Essential function to add:
                <ul className={post.ul}>
                    <li>End game screen and score</li>
                    <li>Tail collision</li>
                </ul>
                Wall collision detection works, but only ends the game with no
                user feedback. Tail collision does not work.
            </p>
            <FullScreenCode code={tail} language="javascript" />
        </>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Snake Game</h1>
                <h2>First Skills</h2>
            </div>

            <TabContainer
                contentTabs={[
                    {
                        title: "Intro",
                        icon: <FontAwesomeIcon size="xl" icon={faCirclePlay} />,
                        content: tabContent1JSX,
                    },
                    {
                        title: "Process",
                        icon: (
                            <FontAwesomeIcon size="xl" icon={faCommentDots} />
                        ),
                        content: tabContent2JSX,
                    },
                    {
                        title: "Conclusion",
                        icon: (
                            <FontAwesomeIcon size="xl" icon={faFlagCheckered} />
                        ),
                        content: tabContent3JSX,
                    },
                ]}
            />

            <div className={post.container}>
                <iframe
                    className={post.iframe}
                    src="/snake.html"
                    title="Snake Game"
                ></iframe>
            </div>
        </div>
    );
};

export default Page;
