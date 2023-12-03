import { FaXTwitter, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa6'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbar}>
            <a href="https://youtube.com/carlosazaustre?sub_confirmation=1">
                <FaYoutube size="32" fill="white" />
            </a>
            <a href="https://discord.gg/carlosazaustre">
                <FaDiscord size="32" fill="white" />
            </a>
            <a href="https://github.com/carlosazaustre">
                <FaGithub size="32" fill="white" />
            </a>
            <a href="https://x.com/carlosazaustre">
                <FaXTwitter size="32" fill="white"/>
            </a>
            </div>
      </nav>
    )
}