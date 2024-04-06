"use client";
import Link from "next/link";
import { useState } from "react";
const Footer = () => {
    const [showNumber, setShowNumber] = useState(false);

    const toggleNumber = () => setShowNumber(!showNumber);
    return (
        <footer>
            <Link href="/Contact">
            <h2>Contact</h2>
            </Link>

            <div className="links">
                <a>Instagram</a>
                <a>linkedin</a>
                {/* <button>Phone</button> */}
                {showNumber ? (
                    <a
                        // href="tel:+1234567890"
                        className="phone animated"
                        // onClick={toggleNumber}
                    >
                        +1 (234) 567-890
                    </a>
                ) : (
                    <a
                        className="phone animated"
                        onClick={toggleNumber}
                    >
                        Phone
                    </a>
                )}
                <a>Github</a>
            </div>
            <h3>built from scratch by me</h3>
        </footer>
    );
};
export default Footer;
