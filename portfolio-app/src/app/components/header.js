import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <Link href="/">
                <FontAwesomeIcon className="homeIcon" icon={faHouse} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
