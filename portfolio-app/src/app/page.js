'use client';
import Image from "next/image";
import styles from "./page.module.css";
import ArtifactCard from "./components/ArtifactCard";
import { motion } from "framer-motion";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.landing}>
                <div className={styles.landingImage}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.landingText}>
                    <h2 className={styles.h2}>Web Developer</h2>
                    <h1 className={styles.h1}>Manh Ellis</h1>
                </div>
            </div>
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            > */}
                <ArtifactCard
                    imgSrc={"/snake.webp"}
                    title="Snake Game"
                    description="First Steps of JS"
                    link="Projects/snake"
                />
            {/* </motion.div> */}

            <ArtifactCard
                imgSrc={"/Monkey-Selfie.webp"}
                title="Artifact 2"
                description="APIs, React and Mobile Layout"
                link="Projects/monkey"
            />
            <ArtifactCard
                imgSrc={"/cow.webp"}
                title="Artifact 3"
                description="Cows and threejs"
                link="Projects/farm"
            />

            <ArtifactCard
                imgSrc={"/anim.jpg"}
                title="Artifact 4"
                description="CSS Animations"
                link="Projects/animation"
            />
        </main>
    );
}
