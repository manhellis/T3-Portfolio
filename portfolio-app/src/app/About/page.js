import styles from "./page.module.css";
const Page = () => {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.titleCard}>
                    <h1 className={styles.title}>About Me</h1>
                    <h2 className={styles.h2}>
                        As a front-end developer, I'm driven to create digital
                        experiences that resonate with meaning and purpose
                    </h2>
                    </div>
                    <div className={styles.imageContainer}>
                    <img
                        src="/pfp_1.webp"
                        className={styles.image}
                    />
                    </div>
                </div>
                    
            <section className={styles.part1}>
                <h1 className={styles.sectionHeader}>What Drives Me?</h1>
                <div className={styles.fullSize}>
                    <div className={styles.halfSize}>
                        <h2 className={styles.pHead}>Career</h2>
                        <p className={styles.p}>
                        As a front-end developer, I'm driven to create
                            digital experiences that resonate with meaning and
                            purpose. I’m committed to working with businesses
                            and organizations that positively impact people,
                            ensuring that my professional work aligns with my
                            social responsibility. My goal is to help give
                            voices to those who need to share important message
                            with their audience.
                        </p>
                    </div>
                    <div className={styles.halfSize}>
                        <h2 className={styles.pHead}>Personal</h2>
                        <p className={styles.p}>As a transracial international adoptee, growing up
                            in the digital age has profoundly shaped my
                            appreciation for the accessibility and abundance of
                            information online. I’ve learned that the Internet
                            has given us an opportunity to connect with people
                            whom we deeply relate to. Just a generation ago,
                            this experience did not exist.
                            
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.part2}>
                <h1 className={styles.sectionHeader}>
                    What Differentiates me?
                </h1>
                <div className={styles.fullSize}>
                    <div className={styles.halfSize}>
                        <h2 className={styles.pHead}>Life and Career</h2>
                        <p className={styles.p}>
                            My Personal projects with climbing related web apps
                            will demonstrate my desire to mix professional
                            experience with my life. It demonstrates my ability
                            to create and complete goals in which I want to
                            create a website. I want to work with meaningful
                            groups such as nonprofits or high reach
                            organizations to make content or sites for them that
                            deliver meaning that matches my mission and also
                            display my practical working skills.
                        </p>
                    </div>
                    <div className={styles.halfSize}>
                        <div className={styles.imageContainerTwo}>
                            <img src="logo.svg" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
