"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import { useState } from "react";

const Page = ({ params }) => {
    const [tab, setTab] = useState(1);
    const handleTab = (newTab) => () => setTab(newTab);

    const tabContent1 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Narrative & Overview:</h1>
            <p>
                I embarked on creating a variety of animations using vanilla CSS and JavaScript, aiming to showcase my skills and infuse basic concepts with my creative ideas.
            </p>
            <p>
                The animations range from holiday-themed vectors to dynamic wave functions, each designed to demonstrate the potential applications of vector animation in web design and add a unique "twinkle" to any site.
            </p>
        </div>
    );

    const tabContent2 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Animation Showcases:</h1>
            <h2 className={post.h2}>Vector Christmas Tree Animation:</h2>
            <p>
                Utilizing an SVG from Adobe Stock, I animated the ornaments with color transitions to mimic a twinkling effect, enhanced by easing functions. An outline stroke animation added a tinsel-like flair.
            </p>
            <h2 className={post.h2}>Santa Claus Scene:</h2>
            <p>
                This animation involved a moving background with a flying Santa GIF, controlled via a mousemove event listener to keep Santa within the moving landscape.
            </p>
            <h2 className={post.h2}>Wave Function in JS:</h2>
            <p>
                A demonstration of how object positions can be related to a sine wave, with the added feature of color-changing circles based on their position in the wave. Interactivity is introduced through sliders, showcasing practical applications like preloaders or progress bars.
            </p>
            <h2 className={post.h2}>Preloader:</h2>
            <p>
                A CSS-only preloader animation showcases squares transforming around a center point, with changing border radii, demonstrating a lightweight visual element suitable for various uses.
            </p>
        </div>
    );

    const tabContent3 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Technical Insights & Applications:</h1>
            <p>
                The use of SVGs and CSS animations offers a rich landscape for web animation, providing a versatile toolset for adding dynamic and visually appealing elements to web pages. These projects highlight the potential of simple CSS and JS to create engaging user experiences and the importance of creative experimentation in web design.
            </p>
        </div>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Creative Web Animations</h1>
                <h2>A Showcase of Vanilla CSS and JS Projects</h2>
            </div>

            <div className={post.container}>
                <div className={post.tabs}>
                    <button onClick={handleTab(1)}>Narrative & Overview</button>
                    <button onClick={handleTab(2)}>Animation Showcases</button>
                    <button onClick={handleTab(3)}>Technical Insights & Applications</button>
                </div>
                <div className={post.canvas}></div>
                {tab === 1 && tabContent1()}
                {tab === 2 && tabContent2()}
                {tab === 3 && tabContent3()}
            </div>
        </div>
    );
};

export default Page;
