import Link from "next/link";
import Container from "@/components/Container/Container";
import { projects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  return (
    <section className={styles.section} aria-labelledby="projects-heading">
      <Container>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Projects</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <Link href="/projects" className={styles.eyebrowLink}>
              View All →
            </Link>
          </div>
          <h2 id="projects-heading" className={styles.heading}>
            Things I've built
          </h2>
          <p className={styles.sub}>
            Side projects and experiments where curiosity does the driving.
          </p>
        </div>

        <ul className={styles.grid} aria-label="Featured projects">
          {projects.map((project, index) => (
            <li key={project.slug} className={styles.card}>
              <span className={styles.cardNum} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardSummary}>{project.summary}</p>
              <div className={styles.cardTags} aria-label="Technologies used">
                {project.tech.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live site`}
                  >
                    Live Site →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    GitHub →
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.cardLink}
                  aria-label={`Read more about ${project.title}`}
                >
                  Details →
                </Link>
              </div>
            </li>
          ))}

          {/* Placeholder card -- remove once you have 2+ real projects */}
          <li className={styles.cardPlaceholder} aria-hidden="true">
            <span className={styles.cardPlaceholderIcon}>✦</span>
            <span className={styles.cardPlaceholderText}>More coming soon</span>
          </li>

        </ul>

      </Container>
    </section>
  );
}