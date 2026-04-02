import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="https://www.utsa.edu/athletics/"
          target="_blank"
          rel="noreferrer"
          className={styles.logoLink}
        >
          <span className={styles.wordmarkU}>UTSA</span>
          <span className={styles.wordmarkSub}>Athletics</span>
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
            href="https://engage.utsa.edu/givenow"
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
