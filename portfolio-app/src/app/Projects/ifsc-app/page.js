import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import Link from "next/link";
import TabContainer from "@/app/components/TabContainer"; // Ensure this import path is correct

const Page = () => {
    const tabContent1JSX = (
        <>
            <h1 className={post.h1}>Concept:</h1>
            <p>
                I've always been obsessed with sport climbing and by extension,
                the related results and statistics. I wanted to create a simple
                web app that would allow me to search for climbing competitions
                and view the results in a clean, easy-to-read format.
            </p>
            <p>
                The International Federation of Sport Climbing (IFSC) is the
                official international organization that runs climbing
                competitions worldwide. Currently they host their results on a
                site <a href="ifsc.results.info">ifsc.results.info</a>.
            </p>
            <h1 className={post.h1}>Development Process:</h1>
            <p>Currently, </p>
            <h2 className={post.h2}>Basic Scene:</h2>
            <p></p>
            <p></p>
        </>
    );

    const tabContent2JSX = (
        <>
            <h2 className={post.h1}>My Own Scene:</h2>
            <p></p>
            <h2 className={post.h1}>GSAP Navigation:</h2>
            <p></p>
            <h1 className={post.h1}>Conclusion & Reflections:</h1>
            <p></p>
        </>
    );
    const tabContent3JSX = (
        <>
            <div className={post.linkContainer}>
                <Link
                    className={post.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://ifsc.manhellis.com"
                >
                    Visit Site{" "}
                </Link>
            </div>
        </>
    );

    const spacers = [3];

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>Exploring ThreeJs for Web 3D</h1>
                <h2>Project Overview</h2>
            </div>

            <TabContainer
                contentTabs={[
                    { title: "Intro", content: tabContent1JSX },
                    { title: "Scraping", content: tabContent2JSX },
                    { title: "Hosting", content: tabContent3JSX },
                ]}
            />
            <div className={post.spacer}></div>
            <div className={post.spacer}></div>
            <div className={post.spacer}></div>
        </div>
    );
};

export default Page;
