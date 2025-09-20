import styles from "../styles/header.module.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
function Header() {
    return (
        <div className={styles.header}>
            <a href="https://www.linkedin.com/in/eric-porter-687aa6122/">
                <FaLinkedin className={styles.Icon} />
            </a>
            <a href="https://github.com/tophthewise">
                <FaGithub className={styles.Icon} />
            </a>
            <a href="">
                <FaFileAlt className={styles.Icon} />
            </a>
        </div>
    );
}

export default Header;
