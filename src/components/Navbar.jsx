import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="https://welcome.miami.edu/athletics/index.html"
          target="_blank"
          rel="noreferrer"
          className={styles.logoLink}
        >
          <img
            src="https://welcome.miami.edu/branding/logo?v=c82a43a8c35a"
            alt="University of Miami Athletics"
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            Naming Opportunities
          </NavLink>
          <a
            href="https://demo30.recognition360.net/campaigns/65022"
            target="_blank"
            rel="noreferrer"
            className={styles.navItem}
          >
            Giving
          </a>
        </nav>
      </div>
    </header>
  )
}
