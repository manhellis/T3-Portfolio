import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.landing}>
                <h2 className={styles.h2}>Web Developer</h2>
                <h1 className={styles.h1}>Manh Ellis</h1>
            </div>
        </main>
    );
}
