import Image from "next/image";
import styles from "./page.module.css";
import ArtifactCard from "./components/ArtifactCard";

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
            <ArtifactCard />
            <ArtifactCard />
            <ArtifactCard />
        </main>
    );
}
