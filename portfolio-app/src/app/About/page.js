import styles from "./page.module.css";
const Page = () => {
    return (
        <main>
            <h1 className={styles.h1}>About Me</h1>
            <h2 className={styles.h2}>
                As a front-end developer, I'm driven to create digital
                experiences that resonate with meaning and purpose
            </h2>
            <div className={styles.image}></div>

            <h1 className={styles.h1}>What Drives Me?</h1>
            <h2 className={styles.sectionHeader}>Personal</h2>
            <h2 className={styles.sectionHeader}>Career</h2>
            <p className={styles.leftP}>
                As a transracial international adoptee, growing up in the
                digital age has profoundly shaped my appreciation for the
                accessibility and abundance of information online. I’ve learned
                that the Internet has given us an opportunity to connect with
                people whom we deeply relate to. Just a generation ago, this
                experience did not exist.
            </p>
            <p className={styles.rightP}>
                As a front-end developer, I'm driven to create digital
                experiences that resonate with meaning and purpose. I’m
                committed to working with businesses and organizations that
                positively impact people, ensuring that my professional work
                aligns with my social responsibility. My goal is to help give
                voices to those who need to share important message with their
                audience.
            </p>
            <h1 className={styles.h1}>What Differentiates me?</h1>
            <div className={styles.image}></div>
        </main>
    );
};

export default Page;
