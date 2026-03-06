import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <>
      {/* Page header */}
      <div className={styles.header}>
        <Container>
          <Link href="/projects" className={styles.backLink}>
            ← Back to Projects
          </Link>

          <div className={styles.headerTop}>
            <span
              className={styles.headerStatus}
              data-status={project.status}
            >
              {project.status === "in-progress"
                ? "In Progress"
                : project.status === "archived"
                ? "Archived"
                : "Live"}
            </span>
          </div>

          <h1 className={styles.headerTitle}>{project.title}</h1>
          <p className={styles.headerSummary}>{project.summary}</p>

          <div className={styles.headerTech} aria-label="Technologies used">
            {project.tech.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <div className={styles.headerLinks}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className={styles.headerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
                <ExternalIcon />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className={styles.headerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ExternalIcon />
              </a>
            )}
          </div>
        </Container>
      </div>

      {/* Highlights */}
      <section
        className={`${styles.section} ${styles.sectionSubtle}`}
        aria-labelledby="highlights-heading"
      >
        <Container size="md">
          <h2 id="highlights-heading" className={styles.sectionHeading}>
            What I built
          </h2>
          <ul className={styles.highlights} aria-label="Project highlights">
            {project.highlights.map((highlight, i) => (
              <li key={i} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Case study -- only renders if caseStudy exists */}
      {caseStudy && (
        <>
          <section
            className={styles.section}
            aria-labelledby="problem-heading"
          >
            <Container size="md">
              <h2 id="problem-heading" className={styles.sectionHeading}>
                The Problem
              </h2>
              <p className={styles.prose}>{caseStudy.problem}</p>
            </Container>
          </section>

          <section
            className={`${styles.section} ${styles.sectionSubtle}`}
            aria-labelledby="process-heading"
          >
            <Container size="md">
              <h2 id="process-heading" className={styles.sectionHeading}>
                The Process
              </h2>
              <p className={styles.prose}>{caseStudy.process}</p>
            </Container>
          </section>

          <section
            className={styles.section}
            aria-labelledby="outcome-heading"
          >
            <Container size="md">
              <h2 id="outcome-heading" className={styles.sectionHeading}>
                The Outcome
              </h2>
              <p className={styles.prose}>{caseStudy.outcome}</p>
            </Container>
          </section>

          <section
            className={`${styles.section} ${styles.sectionSubtle}`}
            aria-labelledby="lesson-heading"
          >
            <Container size="md">
              <h2 id="lesson-heading" className={styles.sectionHeading}>
                The Lesson
              </h2>
              <p className={styles.prose}>{caseStudy.lesson}</p>
            </Container>
          </section>
        </>
      )}

      {/* Footer nav */}
      <div className={styles.footerNav}>
        <Container>
          <div className={styles.footerNavInner}>
            <Link href="/projects" className={styles.footerNavLink}>
              ← All Projects
            </Link>
            <Link href="/work" className={styles.footerNavLink}>
              Work Experience →
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}