"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ArtifactCard from "./components/ArtifactCard";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
    return (
        <>
            <div className={styles.landing}>
                <div className={styles.landingImage}>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.landingText}>
                    <TypeAnimation
                        sequence={[
                            "Web Developer",
                            4000,
                            "Climber",
                            2000,
                            "Photographer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={25}
                        // style={{styles.h2}}
                        repeat={Infinity}
                        className={styles.h2}
                    />
                    {/* <h2 className={styles.h2}>Web Developer</h2> */}
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
            <ArtifactCard
                imgSrc={"/Monkey-Selfie.webp"}
                title="AI Monkey Jokes"
                description="GPT Wrapper with *style"
                link="Projects/monkey"
            />
            <ArtifactCard
                imgSrc={"/cow.webp"}
                title="3D Farm"
                description="Cows and threejs"
                link="Projects/farm"
            />

            <ArtifactCard
                imgSrc={"/anim.jpg"}
                title="Web Animation"
                description="CSS, JS"
                link="Projects/animation"
            />
        </>
    );
}
