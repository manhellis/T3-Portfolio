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
                imgSrc={
                    "/Monkey-Selfie.webp"
                   
                }
                title="Artifact 2"
                description="GPT Wrapper with *style"
                link="Projects/monkey"
            />
            <ArtifactCard
                imgSrc={
                    "/cow.webp"
                }
                title="Artifact 3"
                description="Cows and threejs"
                link="Projects/farm"
            />
            
            <ArtifactCard
                imgSrc={
                    "/anim.jpg"
                }
                title="Artifact 4"
                description="CSS Animations"
                link="Projects/animation"
            />
            {/* <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard /> */}
        </>
    );
};

export default Page;
