import { useParams, Link, Navigate } from 'react-router-dom'
import { getBuildingById } from '../data/buildings'
import styles from './BuildingDetailPage.module.css'

export default function BuildingDetailPage() {
  const { id } = useParams()
  const building = getBuildingById(id)

  if (!building) {
    return <Navigate to="/" replace />
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← Back to buildings
        </Link>

        <h1 className={styles.title}>{building.name}</h1>

        <div className={styles.layout}>
          {/* Left: image + areas */}
          <div className={styles.main}>
            <div className={styles.imageWrap}>
              <img
                src={building.image}
                alt={building.name}
                className={styles.image}
              />
              <div className={styles.mapBadge}>Building map preview coming soon</div>
            </div>

            <section className={styles.areasSection}>
              <h2 className={styles.sectionHeading}>Areas</h2>
              {building.areas.length === 0 ? (
                <p className={styles.noAreas}>
                  No public-ready areas are available for this facility yet.
                </p>
              ) : (
                <ul className={styles.areasList}>
                  {building.areas.map((area) => (
                    <li key={area} className={styles.areaItem}>
                      {area}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          {/* Right: status panel */}
          <aside className={styles.sidebar}>
            <div className={styles.statusCard}>
              <h2 className={styles.statusTitle}>{building.name}</h2>
              <div className={styles.statusGrid}>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Gift Level</span>
                  <span className={styles.statusValue}>{building.giftLevel}</span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Status</span>
                  <span
                    className={`${styles.statusValue} ${
                      building.status === 'Available'
                        ? styles.statusAvailable
                        : styles.statusNamed
                    }`}
                  >
                    {building.status}
                  </span>
                </div>
                <div className={styles.statusItem}>
                  <span className={styles.statusLabel}>Named By</span>
                  <span className={styles.statusValue}>{building.namedBy}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
