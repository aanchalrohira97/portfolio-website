import { FadeIn } from './FadeIn'
import { resume } from '../data/resume'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <FadeIn>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>Projects</h2>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {resume.projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.role}>{project.role}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Featured work at Seismic */}
          <FadeIn delay={0.15}>
            <div className={`${styles.card} ${styles.featuredCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.role}>Featured Production Work</span>
                <h3 className={styles.projectName}>AI Skills Profile System</h3>
                <p className={styles.description}>
                  Pitched, designed, and built an AI-driven skills profiling feature from concept to production at Seismic.
                  Approved at leadership level. Powers learner growth outcomes at scale.
                </p>
              </div>
              <div className={styles.tags}>
                {['AI', 'TypeScript', 'React', 'Production', 'LLM'].map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.featuredBadge}>Production</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.role}>Infrastructure</span>
                <h3 className={styles.projectName}>Multi-Tool AI Dependency Agent</h3>
                <p className={styles.description}>
                  Orchestrated an autonomous agent that identifies and patches outdated dependencies across codebase.
                  Reduced vulnerability analysis time by 50%.
                </p>
              </div>
              <div className={styles.tags}>
                {['AI Agent', 'LLM Orchestration', 'Security', 'Automation'].map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Education */}
        <FadeIn delay={0.3}>
          <div className={styles.education}>
            <span className={styles.eduHeader}>Education</span>
            <div className={styles.eduGrid}>
              {resume.education.map((edu) => (
                <div key={edu.degree} className={styles.eduCard}>
                  <div className={styles.eduYear}>{edu.year}</div>
                  <div className={styles.eduDegree}>{edu.degree}</div>
                  <div className={styles.eduSchool}>{edu.school}</div>
                  <div className={styles.eduGpa}>GPA: {edu.gpa}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
