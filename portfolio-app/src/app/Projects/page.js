import ArtifactCard from "../components/ArtifactCard";
import Stage from "../components/three/stage";
import styles from "./project.module.css";
const Page = () => {
    return (
        <div className={styles.testContainer}>
            <h1 className={styles.h1}>Projects</h1>
            <ArtifactCard />
            
        </div>
    );
};

export default Page;
