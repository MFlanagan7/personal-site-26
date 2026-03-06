import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { workExperience } from "@/data/work";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workExperience.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = workExperience.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: job.company,
    description: job.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const job = workExperience.find((j) => j.slug === slug);

  if (!job) notFound();

  const { caseStudy } = job;

  return (
    <>
      <div className={styles.header}>
        <Container>
          <Link href="/work" className={styles.backLink}>
            ← Back to Work
          </Link>
          <div className={styles.headerMeta}>
            <span className={styles.headerCompany}>{job.company}</span>
            <span className={styles.headerPeriod}>{job.period}</span>
          </div>
          <h1 className={styles.headerTitle}>{job.title}</h1>
          <p className={styles.headerLocation}>{job.location}</p>

          <div className={styles.headerSkills} aria-label="Skills">
            {job.skills.map((skill) => (
              <span key={skill} className={styles.tag}>{skill}</span>
            ))}
          </div>

          {caseStudy?.links && caseStudy.links.length > 0 && (
            <div className={styles.headerLinks}>
              {caseStudy.links
                .filter((l) => l.url)
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className={styles.headerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ExternalIcon />
                  </a>
                ))}
            </div>
          )}
        </Container>
      </div>

      <section className={styles.section} aria-labelledby="summary-heading">
        <Container size="md">
          <p className={styles.summary}>{job.summary}</p>
        </Container>
      </section>

      <section
        className={`${styles.section} ${styles.sectionSubtle}`}
        aria-labelledby="highlights-heading"
      >
        <Container size="md">
          <h2 id="highlights-heading" className={styles.sectionHeading}>
            What I did
          </h2>
          <ul className={styles.highlights} aria-label="Work highlights">
            {job.highlights.map((highlight, i) => (
              <li key={i} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {caseStudy && (
        <>
          <section className={styles.section} aria-labelledby="problem-heading">
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

          <section className={styles.section} aria-labelledby="outcome-heading">
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

      <div className={styles.footerNav}>
        <Container>
          <div className={styles.footerNavInner}>
            <Link href="/work" className={styles.footerNavLink}>
              ← All Work
            </Link>
            <Link href="/about" className={styles.footerNavLink}>
              About Me →
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