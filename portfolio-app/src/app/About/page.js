import styles from "./page.module.css";
const Page = () => {
    return (
        <>
            <div className={styles.titleCard}>
                <h1 className={styles.title}>About Me</h1>
                <h2 className={styles.h2}>
                    As a front-end developer, I'm driven to create digital
                    experiences that resonate with meaning and purpose
                </h2>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}></div>
            </div>

            <h1 className={styles.drive}>What Drives Me?</h1>
            <h2 className={styles.sectionHeaderLeft}>Personal</h2>
            <h2 className={styles.sectionHeaderRight}>Career</h2>
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
            <h1 className={styles.diff}>What Differentiates me?</h1>
            <h2 className={styles.sectionHeaderLeftTwo}>Life and Career</h2>
            <p className={styles.rightPTwo}>
                My Personal projects with climbing related web apps will
                demonstrate my desire to mix professional experience with my
                life. It demonstrates my ability to create and complete goals in
                which I want to create a website. I want to work with meaningful
                groups such as nonprofits or high reach organizations to make
                content or sites for them that deliver meaning that matches my
                mission and also display my practical working skills.
            </p>
            <div className={styles.imageContainerTwo}>
                <img src="logo.svg" alt="Logo" />
            </div>
        </>
    );
};

export default Page;
