import ArtifactCard from "../components/ArtifactCard";
import Stage from "../components/three/stage";
import styles from "./project.module.css";
const Page = () => {
    return (
        <main>
            <div className={styles.testContainer}>
                <h1 className={styles.h1}>Projects</h1>
                
            </div>
            <ArtifactCard />
        </main>
    );
};

export default Page;
