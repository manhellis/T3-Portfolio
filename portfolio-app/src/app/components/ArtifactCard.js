import styles from "../styles/ArtifactCard.module.css";
import { plex_sans } from "../fonts";
import Link from "next/link";
const ArtifactCard = ({ imgSrc, link, title, description}) => {
    // const title = "Artifact 1";
    // const description = "React, tailwind, ...";
    const imgStyle = { "background-image": ` url('${imgSrc}')` };
    return (
        <Link href={link} className={`${plex_sans.className} ${styles.card}`}>
            <div className={styles.preview} style={imgStyle}>
                {/* <p> image</p> */}
                {/* {imgSrc&& <img src={imgSrc} alt="artifact" />} */}
                {/* /* <img src={image} alt="artifact" /> */}
            </div>
            <div className={styles.subHeader}>
                <p className={styles.description}>{description}</p>
                <h1 className={styles.h1}>{title.toUpperCase()}</h1>
            </div>
        </Link>
    );
};
export default ArtifactCard;
