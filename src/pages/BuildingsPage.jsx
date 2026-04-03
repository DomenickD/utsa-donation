import { Link } from 'react-router-dom'
import { buildings } from '../data/buildings'
import styles from './BuildingsPage.module.css'

export default function BuildingsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Naming Opportunities</h1>

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
                </div>
              </Link>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>
                  <Link to={`/buildings/${building.id}`}>{building.name}</Link>
                </h2>
                <Link to={`/buildings/${building.id}`} className={styles.learnMore}>
                  Learn More »
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
