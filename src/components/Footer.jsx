import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.wordmarkU}>UTSA</span>
          <span className={styles.wordmarkSub}>Athletics</span>
        </div>
        <p className={styles.tagline}>Building champions. Building legacies.</p>
        <a
          href="https://engage.utsa.edu/givenow"
          target="_blank"
          rel="noreferrer"
          className={styles.givingLink}
        >
          Make a Gift &rarr;
        </a>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {new Date().getFullYear()} University of Texas at San Antonio Athletics. All rights reserved.</span>
      </div>
    </footer>
  )
}
