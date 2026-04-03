import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="https://goutsa.com"
          target="_blank"
          rel="noreferrer"
          className={styles.logoLink}
        >
          <img
            src="https://goutsa.com/_nuxt/logo.DqjNS18P.png"
            alt="UTSA Roadrunners Athletics"
            className={styles.logo}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Naming Opportunities</span>
            <span className={styles.logoSub}>UTSA Athletics</span>
          </div>
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
            href="https://utsaathletics.com/giving"
            target="_blank"
            rel="noreferrer"
            className={styles.givingBtn}
          >
            Make a Gift
          </a>
        </nav>
      </div>
    </header>
  )
}
