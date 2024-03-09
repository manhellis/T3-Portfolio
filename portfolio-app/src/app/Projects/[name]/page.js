"use client";
import styles from "../project.module.css";
import post from "./post.module.css";
import { useState } from "react";
const Page = ({ params }) => {
    const [tab, setTab] = useState(1);
    const handleTab = (newTab) => () => setTab(newTab); // Updated to return a function

    const tabContent1 = () => (
        <div className={post.description}>
            <h1>Drawing a grid on a canvas():</h1>
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

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Snake Game</h1>
                <h2>Web Developer</h2>
            </div>

            <div className={post.container}>
                <div className={post.tabs}>
                    <button onClick={handleTab(1)}>Header 1</button>
                    <button onClick={handleTab(2)}>Header 2</button>
                    <button onClick={handleTab(3)}>Header 3</button>
                </div>
                <div className={post.canvas}></div>
                {tab === 1 && tabContent1()} {/* transition? */}
                <div>
                    <img></img>
                </div>
            </div>
        </div>
    );
};

export default Page;
