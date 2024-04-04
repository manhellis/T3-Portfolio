"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false); // default state is false

    const menuToggle = () => {
        setIsNavVisible(!isNavVisible); // Toggle visibility state
    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsNavVisible(false); // Hide the navigation if Escape is pressed
            }
        };

        // Add event listener
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header>
            <Link href="/" scroll={false}>
                <FontAwesomeIcon className="icon homeIcon" icon={faHouse} />
            </Link>

            <button
                className={`icon toggle ${isNavVisible ? "hidden" : "active"}`}
                aria-label="Toggle menu"
                onClick={menuToggle}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <nav className={`main-nav `}>
                <ul>
                    <li>
                        <Link href="/Projects" scroll={false}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/About" scroll={false} >About</Link>
                    </li>
                    <li>
                       <Link href="/Contact" scroll={false} >Contact</Link>
                        {/* <a className="mailto" href="mailto:manh@manhellis.com">
                            Contact
                        </a> */}
                    </li>
                    {/* <li>
                        // <Link href="/Contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>
            <nav className={`mobile-nav ${isNavVisible ? "active" : ""}`}>
                <button
                    className="icon "
                    aria-label="Close menu"
                    onClick={menuToggle}
                >
                    {/* <span>≡</span> */}
                    <FontAwesomeIcon icon={faX} />
                </button>
                <ul>
                    <li>
                        <Link href="/Projects" scroll={false} onClick={menuToggle}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/About" scroll={false} onClick={menuToggle}>
                            About
                        </Link>
                    </li>
                    <li>
                        <a className="mailto" href="mailto:manh@manhellis.com">
                            Contact
                        </a>
                    </li>
                    {/* <li>
                        // <Link href="/Contact">Contact</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
