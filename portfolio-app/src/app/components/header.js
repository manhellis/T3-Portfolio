import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Sometype } from "../fonts";
const Header = () => {
    return (
        <header>
            <Link href="/">
                <FontAwesomeIcon className="homeIcon" icon={faHouse} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/Projects" className={Sometype}>Projects</Link>
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
