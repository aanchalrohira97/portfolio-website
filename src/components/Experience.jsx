import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { resume } from '../data/resume'
import styles from './Experience.module.css'

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState(0)
  const [activeRole, setActiveRole] = useState(0)

  const company = resume.experience[activeCompany]

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>01</span>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
        </FadeIn>

        <div className={styles.layout}>
          {/* Company tabs */}
          <FadeIn direction="right" delay={0.1}>
            <div className={styles.companySidebar}>
              {resume.experience.map((exp, i) => (
                <button
                  key={exp.company}
                  className={`${styles.companyTab} ${activeCompany === i ? styles.activeTab : ''}`}
                  onClick={() => { setActiveCompany(i); setActiveRole(0) }}
                >
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={styles.companyPeriod}>{exp.period}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Roles */}
          <div className={styles.roles}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCompany}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.roleTabs}>
                  {company.roles.map((role, i) => (
                    <button
                      key={role.title}
                      className={`${styles.roleTab} ${activeRole === i ? styles.activeRoleTab : ''}`}
                      onClick={() => setActiveRole(i)}
                    >
                      {role.title}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={styles.highlights}
                  >
                    <div className={styles.roleHeader}>
                      <h3 className={styles.roleTitle}>{company.roles[activeRole].title}</h3>
                      <span className={styles.rolePeriod}>{company.roles[activeRole].period}</span>
                      <span className={styles.roleLocation}>@ {company.company}, {company.location}</span>
                    </div>
                    <ul className={styles.bulletList}>
                      {company.roles[activeRole].highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className={styles.bullet}
                        >
                          <span className={styles.bulletMark}>▸</span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
