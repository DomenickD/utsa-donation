import { Link } from 'react-router-dom'
import { buildings } from '../data/buildings'
import styles from './BuildingsPage.module.css'

export default function BuildingsPage() {
  return (
    <main className={styles.page}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>University of Texas at San Antonio</p>
          <h1 className={styles.heroTitle}>Shape the Future of UTSA Athletics</h1>
          <p className={styles.heroSub}>
            Your gift creates a lasting legacy on campus. Explore naming opportunities
            for our world-class athletic facilities.
          </p>
          <a
            href="https://engage.utsa.edu/givenow"
            target="_blank"
            rel="noreferrer"
            className={styles.heroCta}
          >
            Make a Gift &rarr;
          </a>
        </div>
      </section>

      {/* Grid */}
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Naming Opportunities</h2>

        <div className={styles.grid}>
          {buildings.map((building) => (
            <article key={building.id} className={styles.card}>
              <Link to={`/buildings/${building.id}`} className={styles.imageLink}>
                <div className={styles.imageWrap}>
                  <img
                    src={building.image}
                    alt={building.name}
                    className={styles.image}
                    loading="lazy"
                  />
                  {building.status === 'Available' && (
                    <span className={styles.availableBadge}>Available</span>
                  )}
                </div>
              </Link>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>
                  <Link to={`/buildings/${building.id}`}>{building.name}</Link>
                </h3>
                <Link to={`/buildings/${building.id}`} className={styles.learnMore}>
                  Learn More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
