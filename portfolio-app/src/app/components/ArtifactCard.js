import styles from "../styles/ArtifactCard.module.css";
import { plex_sans } from "../fonts";
const ArtifactCard = () => {
    const title = "Artifact 1";
    const description = "React, tailwind, ...";
    return (
        <div className={`${plex_sans.className} ${styles.card}`}>
            <div className={styles.preview}>
                {/* <p> image</p> */}
            </div>
            <div className={styles.subHeader}>
                <p className={styles.description}>{description}</p>
                <h1 className={styles.h1}>{title.toUpperCase()}</h1>
            </div>
        </div>
    );
};
export default ArtifactCard;
