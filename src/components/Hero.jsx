import { motion } from 'framer-motion'
import { resume } from '../data/resume'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.grid}>
        {/* Decorative grid lines */}
        <div className={styles.gridLines} aria-hidden="true">
          {[...Array(6)].map((_, i) => <div key={i} className={styles.gridLine} />)}
        </div>

        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className={styles.eyebrow}>
            <span className={styles.dot} />
            Available for new opportunities
          </motion.p>

          <motion.h1 variants={item} className={styles.name}>
            {resume.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? styles.nameAccent : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.h2 variants={item} className={styles.title}>
            {resume.title}
          </motion.h2>

          <motion.p variants={item} className={styles.tagline}>
            {resume.about}
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#experience" className={styles.btnPrimary}>
              View Work
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={item} className={styles.links}>
            <a href={resume.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
              GitHub ↗
            </a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
              LinkedIn ↗
            </a>
            <span className={styles.socialLink}>{resume.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {[
            { num: '4+', label: 'Years Experience' },
            { num: '50%', label: 'Bug Backlog Cut' },
            { num: '30%', label: 'Efficiency Gained' },
            { num: '100%', label: 'Email Uptime Restored' },
          ].map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className={styles.scrollDot}
        />
      </div>
    </section>
  )
}
