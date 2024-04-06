"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import TabContainer from "@/app/components/TabContainer"; // Ensure this import path is correct

const Page = ({ params }) => {
    // The tab state and handleTab function are now managed by TabContainer

    const tabContent1JSX = (
        <div className={post.description}>
            <h1 className={post.h1}>Narrative & Overview:</h1>
            <p>
                I embarked on creating a variety of animations using vanilla CSS
                and JavaScript, aiming to showcase my skills and infuse basic
                concepts with my creative ideas.
            </p>
            <p>
                The animations range from holiday-themed vectors to dynamic wave
                functions, each designed to demonstrate the potential
                applications of vector animation in web design and add a unique
                "twinkle" to any site.
            </p>
            <h2 className={post.h1}>Vector Christmas Tree Animation:</h2>
            <p>
                Utilizing an SVG from Adobe Stock, I animated the ornaments with
                color transitions to mimic a twinkling effect, enhanced by
                easing functions. An outline stroke animation added a
                tinsel-like flair.
            </p>
            <iframe src="/tree.html" className={post.iframe} title="Christmas Tree" />
        </div>
    );

    const tabContent2JSX = (
        <div className={post.description}>
            <h2 className={post.h1}>Santa Claus Scene:</h2>
            <p>
                This animation involved a moving background with a flying Santa
                GIF, controlled via a mousemove event listener to keep Santa
                within the moving landscape.
            </p>
            <iframe src="/santa.html" className={post.iframe} title="Santa Claus" />
        </div>
    );

    const tabContent3JSX = (
        <div className={post.description}>
            <h2 className={post.h1}>Wave Function in JS:</h2>
            <p>
                A demonstration of how object positions can be related to a sine
                wave, with the added feature of color-changing circles based on
                their position in the wave. Interactivity is introduced through
                sliders, showcasing practical applications like preloaders or
                progress bars.
            </p>
            <iframe src="/wave.html" className={post.iframe} title="Wave Function" />
        </div>
    );

    const tabContent4JSX = (
        <div className={post.description}>
            <h2 className={post.h1}>Preloader:</h2>
            <p>
                A CSS-only preloader animation showcases squares transforming
                around a center point, with changing border radii, demonstrating
                a lightweight visual element suitable for various uses.
            </p>
            <iframe src="/preloader.html" className={post.iframe} title="Preloader" />
        </div>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Creative Web Animations</h1>
                <h2>A Showcase of Vanilla CSS and JS Projects</h2>
            </div>

            <TabContainer
                contentTabs={[
                    { title: "Christmas", content: tabContent1JSX },
                    { title: "Santa", content: tabContent2JSX },
                    { title: "Wave Function", content: tabContent3JSX },
                    { title: "Preloader", content: tabContent4JSX },
                ]}
            />
        </div>
    );
};

export default Page;
