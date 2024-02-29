import ArtifactCard from "../components/ArtifactCard";
import Stage from "../components/three/stage";
import styles from "./project.module.css";
const Page = () => {

    const img1 = "https://picsum.photos/400/330"
    return (
        <main>
            <div className={styles.title}>
                <h1 className={styles.h1}>Projects</h1>
                <h2>Web Developer</h2>
            </div>
            {/* <ArtifactCard className={styles.artifact}/>
            <ArtifactCard />
            <ArtifactCard /> */}
            <ArtifactCard imgSrc={img1}/>
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
        </main>
    );
};

export default Page;
