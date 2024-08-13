"use client";
import styles from "../project.module.css";
import post from "../../styles/post.module.css";
import Link from "next/link";
import TabContainer from "@/app/components/TabContainer"; // Ensure this import path is correct
import {
    faCode,
    faClipboardList,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = () => {
    const tabContent1JSX = (
        <>
            <h1 className={post.h1}>Project Overview:</h1>
            <p className={post.p}>
                The PHP Yearbook improvement project focused on enhancing the
                aesthetics, usability, and functionality of an existing Yearbook platform.
                Key improvements included developing a secure user authentication system,
                refining the login process, and integrating dynamic gallery features, all while
                ensuring a responsive design across various devices.
            </p>
            <h2 className={post.h2}>Goal:</h2>
            <p className={post.p}>
                To add aesthetics, usability, and new functionality to an existing PHP Yearbook
                platform, with a focus on user authentication, user-friendly login processes,
                dynamic gallery features, and responsive design.
            </p>
        </>
    );

    const tabContent2JSX = (
        <>
            <h2 className={post.h1}>Development Process:</h2>
            <p className={post.p}>
                The project started on May 30, 2024, and ended on June 17, 2024, spanning
                a total of 30 hours. During this time, the team focused on several key
                tasks, including implementing secure user authentication, creating a dynamic
                gallery page, refactoring the authentication code for better readability and
                security, and ensuring the platform's responsiveness across different screen
                sizes.
            </p>
            <h2 className={post.h2}>Actions Taken:</h2>
            <ul className={post.ul}>
                <li>May 30-31: Implemented email and password creation for user authentication and added login functionalities.</li>
                <li>June 4-5: Created the gallery page to display student photos dynamically and improved authentication code readability.</li>
                <li>June 6: Refactored the authentication code and updated the login user flow.</li>
                <li>June 8: Established a new database structure and ensured seamless authentication and login processes.</li>
                <li>June 10: Refactored the handleLogin function and implemented random student photos on the homepage.</li>
                <li>June 11-12: Reworked CSS for responsive design and implemented global CSS variables.</li>
                <li>June 14: Updated the student page with PHP enhancements and improved gallery features.</li>
                <li>June 17: Fixed link issues and finalized responsiveness updates for various pages.</li>
            </ul>
        </>
    );

    const tabContent3JSX = (
        <>
            <h2 className={post.h1}>Technical Information:</h2>
            <p className={post.p}>
                The project was developed using PHP, JavaScript, HTML, CSS, and MySQL.
                The use of modern JavaScript syntax and PHP enhancements helped improve
                performance and maintainability. The gallery and login pages were optimized
                for responsiveness across different devices, ensuring a consistent user experience.
            </p>
            <div className={post.linkContainer}>
                <Link
                    className={post.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://yearbook.manhellis.com"
                >
                    Visit Project{" "}
                </Link>
            </div>
        </>
    );

    return (
        <div className={post.post}>
            <div className={styles.title}>
                <h1 className={styles.h1}>PHP Yearbook </h1>
                <h2>Project Log</h2>
            </div>

            <TabContainer
                contentTabs={[
                    {
                        title: "Overview",
                        icon: <FontAwesomeIcon size="xl" icon={faClipboardList} />,
                        content: tabContent1JSX,
                    },
                    {
                        title: "Process",
                        icon: <FontAwesomeIcon size="xl" icon={faCode} />,
                        content: tabContent2JSX,
                    },
                    {
                        title: "Technical Info",
                        icon: <FontAwesomeIcon size="xl" icon={faServer} />,
                        content: tabContent3JSX,
                    },
                ]}
            />
        </div>
    );
};

export default Page;
