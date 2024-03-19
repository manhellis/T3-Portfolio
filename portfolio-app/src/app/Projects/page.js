import ArtifactCard from "../components/ArtifactCard";
import Stage from "../components/three/stage";
import styles from "./project.module.css";
const Page = () => {
    const img1 = "https://picsum.photos/400/330";
    return (
        <main>
            <div className={styles.title}>
                <h1 className={styles.h1}>Projects</h1>
                <h2>Web Developer</h2>
            </div>
            {/* <ArtifactCard className={styles.artifact}/>
            <ArtifactCard />
            <ArtifactCard /> */}
            <ArtifactCard
                imgSrc={img1}
                title="Snake Game"
                description="First Steps of JS"
                link="Projects/snake"
            />
            <ArtifactCard
                imgSrc={
                    "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                }
                title="Artifact 2"
                description="APIs, React and Mobile Layout"
                link="Projects/monkey"
            />
            <ArtifactCard
                imgSrc={
                    "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                }
                title="Artifact 3"
                description="Cows and threejs"
                link="Projects/farm"
            />
            
            <ArtifactCard
                imgSrc={
                    "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                }
                title="Artifact 4"
                description="Animations"
                link="Projects/animation"
            />
            {/* <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard /> */}
        </main>
    );
};

export default Page;
