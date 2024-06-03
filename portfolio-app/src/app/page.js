"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ArtifactCard from "./components/ArtifactCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
    return (
        <>
            <div className={styles.landing}>
                <div className={styles.landingImage}>
                    <img
                        src="/pfp_1.webp"
                        layout="fill"
                        objectFit="cover"
                        className={styles.image}
                    />
                    {/* <Link href="/Contact" className={styles.cta} scroll={false}>
                        Let's Talk
                    </Link> */}
                    {/* <image className={styles.image} src="/pfp_1.webp" /> */}
                </div>
                <div className={styles.landingText}>
                    <span className={styles.h2}>Hello, I'm</span>
                    <h1 className={styles.h1}>Manh Ellis</h1>
                    <h2 className={styles.h2}>
                        A{" "}
                        <span className={styles.bold}>Front End Developer</span>
                    </h2>
                    <p className={styles.hook}>
                        My experience as a competitive climber has taught me how
                        to solve problems under pressure. I love creating web
                        applications that offer solutions to their users!
                    </p>
                    {/* <TypeAnimation
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
                    /> */}
                    {/* <h2 className={styles.h2}>Web Developer</h2> */}
                </div>
                {/* <div className={styles.bioCta}> */}
                <div className={`${styles.cta1} ${styles.cta}`}>
                    <Link href="/Projects">See Projects</Link>
                </div>
                <div className={`${styles.cta2} ${styles.cta}`}>
                    <Link href="/Projects">Contact Me</Link>
                </div>
                {/* </div> */}
            </div>
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
            > */}
            {/* <ArtifactCard
                imgSrc={"/snake.webp"}
                title="Snake Game"
                description="First Steps of JS"
                link="Projects/snake"
            /> */}
            <div className={styles.subHeader}>
                <span className={styles.h1}>Projects</span>
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
                    imgSrc={"/ifsc.webp"}
                    title="IFSC Results"
                    description="Python, Docker, NextJs"
                    link="Projects/ifsc-app"
                />
                <div className={styles.ctaContainer}>
                    <Link href="/Projects" className={styles.cta}>
                        All Projects
                    </Link>
                </div>
            </div>

            {/* <ArtifactCard
                imgSrc={"/anim.jpg"}
                title="Web Animation"
                description="CSS, JS"
                link="Projects/animation"
            /> */}

            {/* <div className="spacer"></div> */}
        </>
    );
}
