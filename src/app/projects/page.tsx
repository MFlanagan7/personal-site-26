import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader/PageHeader";
import Container from "@/components/Container/Container";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and experiments from Michael Flanagan -- frontend developer and marketing technologist.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        heading="Things I've built"
        sub="Side projects and experiments where curiosity does the driving."
      />

      <section className={styles.section}>
        <Container>
          <ul className={styles.grid} aria-label="Projects">
            {projects.map((project, index) => (
              <li key={project.slug} className={styles.card}>

                <div className={styles.cardTop}>
                  <span className={styles.cardNum} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.cardStatus} data-status={project.status}>
                    {project.status === "in-progress" ? "In Progress" : project.status === "archived" ? "Archived" : "Live"}
                  </span>
                </div>

                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardSummary}>{project.summary}</p>

                <ul className={styles.cardHighlights} aria-label="Project highlights">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className={styles.cardHighlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

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
          </ul>
        </Container>
      </section>
    </>
  );
}