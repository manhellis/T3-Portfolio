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
                <a href="https://www.instagram.com/manh_ellis/">Instagram</a>
                <a href="www.linkedin.com/in/manhellis">Linkedin</a>
                {/* <button>Phone</button> */}
                {showNumber ? (
                    <a
                        // href="tel:+1234567890"
                        className="phone animated"
                        // onClick={toggleNumber}
                    >
                        +1 (613) 890-manh
                    </a>
                ) : (
                    <a
                        className="phone animated"
                        onClick={toggleNumber}
                    >
                        Phone
                    </a>
                )}
                <a href="https://github.com/manhellis">Github</a>
            </div>
            <h3>built from scratch by me</h3>
        </footer>
    );
};
export default Footer;
