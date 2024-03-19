"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import { useState } from "react";
const Page = ({ params }) => {
    const [tab, setTab] = useState(1);
    const handleTab = (newTab) => () => setTab(newTab); // Updated to return a function

    const tabContent1 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Purpose:</h1>
            <p>
                The goal was to make a snake game without using any reference to
                other existing concepts. As a first project in JS, it shows my
                decision making at an early stage and demonstrates my eagerness
                to learn.
                <ol className={post.ol}>
                    <li>
                        When first being introduced to JavaScript, I was told a
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
            <p>
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
        </div>
    );

    const tabContent2 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Drawing an Apple:</h1>
            <p>
                Drawing an apple: An apple is just a filled cell, with width and
                height of cellSize. A random apple uses the Math.floor function
                along with a Math.random to get a random value that lands within
                the dimensions of the game.
            </p>
            <h1 className={post.h1}>Drawing a snake:</h1>
            <p>
                A snake, the player character, is just a box drawn in the center
                to begin.
            </p>
            <h1 className={post.h1}>Controls</h1>
            <p>
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
        </div>
    );

    const tabContent3 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>The Snake Tail:</h1>
            <p>
                The function <code>moveBox(x,y)</code>: moves the player from
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
            <p>
                Functions I’d like to add (or have added):
                <ul className={post.ul}>
                    <li>Game start/stop</li>
                    <li>Custom speed, grid size, colours, icons</li>
                    <li>Animations</li>
                    <li>Class based</li>
                </ul>
            </p>
            <p>
                Essential function to add:
                <ul className={post.ul}>
                    <li>End game screen and score</li>
                    <li>Tail collision</li>
                </ul>
                Wall collision detection works, but only ends the game with no
                user feedback. Tail collision does not work.
            </p>
        </div>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Snake Game</h1>
                <h2>Web Developer</h2>
            </div>

            <div className={post.container}>
                <div className={post.tabs}>
                    <button onClick={handleTab(1)}>Intro</button>
                    <button onClick={handleTab(2)}>Process</button>
                    <button onClick={handleTab(3)}>Conclusion</button>
                </div>
                <div className={post.canvas}></div>
                {tab === 1 && tabContent1()}
                {tab === 2 && tabContent2()}
                {tab === 3 && tabContent3()}
                <div>
                    <img></img>
                </div>
            </div>
        </div>
    );
};

export default Page;
