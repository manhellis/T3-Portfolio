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

            <ArtifactCard
                imgSrc={'https://picsum.photos/400/330'}
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
        </main>
    );
}
