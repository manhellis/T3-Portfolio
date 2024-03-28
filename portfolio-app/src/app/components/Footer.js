"use client";
import { useState } from "react";
const Footer = () => {
    const [showNumber, setShowNumber] = useState(false);

    const toggleNumber = () => setShowNumber(!showNumber);
    return (
        <footer>
            <h2>Contact</h2>

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
