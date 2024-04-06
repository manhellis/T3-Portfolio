import Contact from "../components/Contact";
import styles from "./page.module.css";
const Page = () => {
    return (
        <>
            <div className={styles.title}>
                <h1 className={styles.h1}>Contact Me</h1>
                <h2>Send me an email</h2>
            </div>
            {/* <div classname={styles.full} */}
            <div className={styles.container}>
                <Contact />
            </div>
        </>
    );
};

export default Page;
