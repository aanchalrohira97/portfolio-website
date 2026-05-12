import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { resume } from '../data/resume'
import styles from './Skills.module.css'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null)
  const categories = Object.entries(resume.skills)

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>Skills</h2>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {categories.map(([category, tags], catIdx) => (
            <FadeIn key={category} delay={catIdx * 0.07}>
              <div
                className={`${styles.card} ${activeCategory === category ? styles.activeCard : ''}`}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <h3 className={styles.cardTitle}>{category}</h3>
                <div className={styles.tags}>
                  {tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className={styles.tag}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: catIdx * 0.07 + i * 0.03 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.4}>
          <div className={styles.certs}>
            <span className={styles.certLabel}>Certifications</span>
            {resume.certifications.map((cert) => (
              <span key={cert} className={styles.cert}>{cert}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
