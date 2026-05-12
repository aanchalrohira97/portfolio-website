import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { resume } from '../data/resume'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>Contact</h2>
          </div>
        </FadeIn>

        <div className={styles.layout}>
          <FadeIn delay={0.1}>
            <div className={styles.copy}>
              <h3 className={styles.headline}>Let's Build Something.</h3>
              <p className={styles.body}>
                Open to senior full stack, AI engineering, and staff engineer roles.
                I move fast, ship clean code, and build systems that last.
              </p>

              <div className={styles.contactItems}>
                <a href={`mailto:${resume.email}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉</span>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{resume.email}</span>
                  </div>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>◉</span>
                  <div>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>{resume.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.links}>
              <a href={resume.linkedin} target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkTitle}>LinkedIn</span>
                <span className={styles.linkArrow}>↗</span>
              </a>
              <a href={resume.github} target="_blank" rel="noreferrer" className={styles.linkCard}>
                <span className={styles.linkTitle}>GitHub</span>
                <span className={styles.linkArrow}>↗</span>
              </a>
              <a href={`mailto:${resume.email}`} className={`${styles.linkCard} ${styles.emailCard}`}>
                <span className={styles.linkTitle}>Send Email</span>
                <span className={styles.linkArrow}>→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerName}>{resume.name}</span>
        <span className={styles.footerLine}>Built with React + Framer Motion</span>
      </footer>
    </section>
  )
}
