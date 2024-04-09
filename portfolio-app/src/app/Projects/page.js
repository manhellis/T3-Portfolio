import ArtifactCard from "../components/ArtifactCard";
import Stage from "../components/three/stage";
import styles from "./project.module.css";
const Page = () => {
    const img1 = "https://picsum.photos/400/330";
    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.h1}>Projects</h1>
                <h2>Web Developer</h2>
            </div>
            {/* <ArtifactCard className={styles.artifact}/>
            <ArtifactCard />
            <ArtifactCard /> */}
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
            {/* <ArtifactCard
                imgSrc={"/ifsc.png"}
                title="IFSC Results"
                description="Python, Docker, NextJs"
                link="Projects/ifsc-results"
            /> */}
            {/* <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard /> */}
        </>
    );
};

export default Page;
