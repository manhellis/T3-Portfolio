"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import Link from "next/link";   
import { useState } from "react";

const Page = ({ params }) => {
    const [tab, setTab] = useState(1);
    const handleTab = (newTab) => () => setTab(newTab);

    const tabContent1 = () => (
        <div className={post.description}>
            <h1 className={post.h1}>Narrative:</h1>
            <p>
                ThreeJs was recommended as a JavaScript Library for implementing
                a term project. Intrigued by the possibility of building a 3D
                scene and navigating it within the browser, I embarked on this
                creative journey.
            </p>{" "}
            <h1 className={post.h1}>Development Process:</h1>
            <h2 className={post.h2}>Basic Scene:</h2>
            <p>
                My initial step was to create a basic 3D scene, which consisted
                of a spinning cube. This required constructing a camera object,
                cube object, lights, and the scene itself, which was then
                rendered using WebGL.
            </p>
            <p>
                Enhancements like animated rotation, lighting effects, and
                orbital control were added to enrich the basic cube scene.
                Additionally, I explored importing external models and
                highlighting edge geometry.
            </p>
        </div>
    );

    const tabContent2 = () => (
        <div className={post.description}>
            <h2 className={post.h1}>My Own Scene:</h2>
            <p>
                Progressing beyond the basics, I constructed a custom scene in
                Blender using free game assets and optimized it for web display.
                This included using baked textures for efficiency and adding
                advanced lighting and post-processing effects.
            </p>
            <h2 className={post.h1}>GSAP Navigation:</h2>
            <p>
                To introduce interactive navigation, I employed GSAP to animate
                camera movements and linked these animations to HTML button
                controls, allowing users to explore the scene dynamically.
            </p>
            <h1 className={post.h1}>Conclusion & Reflections:</h1>
            <p>
                Through this project, I gained valuable insights into 3D web
                technologies and their practical applications. This experience
                has equipped me with unique skills I hope to apply in creative
                design, data-driven reporting, and producing visually engaging
                content.
            </p>
        </div>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Exploring ThreeJs for Web 3D</h1>
                <h2>Project Overview</h2>
            </div>

            <div className={post.container}>
                <div className={post.tabs}>
                    <button onClick={handleTab(1)}>Intro</button>
                    <button onClick={handleTab(2)}>Conclusion</button>
                   
                </div>
                <div className={post.canvas}></div>
                {tab === 1 && tabContent1()}
                {tab === 2 && tabContent2()}
            </div>
            <div className={post.container2}>
            
                <Link className={post.link} rel="noopener noreferrer"  target="_blank" href="https://web-scripting-term-project.vercel.app/">Visit Site </Link>
            </div>
        </div>
    );
};

export default Page;
