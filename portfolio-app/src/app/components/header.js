"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Sometype } from "../fonts";
import { useState } from "react";
const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const menuToggle = () => {
        setIsNavVisible(!isNavVisible); // Toggle visibility state
    };

    return (
        <header>
            <Link href="/">
                <FontAwesomeIcon className="icon homeIcon" icon={faHouse} />
            </Link>

            <button
                className={`icon bars ${isNavVisible ? "" : "active"}`}
                aria-label="Toggle menu"
                onClick={menuToggle}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <nav className={`main-nav ${isNavVisible ? "active" : ""}`}>
                <button
                    className="icon close"
                    aria-label="Close menu"
                    onClick={menuToggle}
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <ul>
                    <li>
                        <Link href="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <a class="mailto" href="mailto:manh@manhellis.com">Contact</a>
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
