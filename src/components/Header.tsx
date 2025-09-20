import styles from "../styles/header.module.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
function Header() {
    return (
        <div className={styles.header}>
            <a href="">
                <FaLinkedin className={styles.Icon} />
            </a>
            <a href="">
                <FaGithub className={styles.Icon} />
            </a>
            <a href="">
                <FaFileAlt className={styles.Icon} />
            </a>
        </div>
    );
}

export default Header;
