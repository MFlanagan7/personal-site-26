import Link from "next/link";
import Container from "@/components/Container/Container";
import { workExperience } from "@/data/work";
import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <Container>

        {/* Section header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Featured Work</span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <Link href="/work" className={styles.eyebrowLink}>
              View All →
            </Link>
          </div>
          <h2 id="work-heading" className={styles.heading}>
            Where I've made an impact
          </h2>
          <p className={styles.sub}>
            Real work, real outcomes. Here's what I've been building.
          </p>
        </div>

        {/* Work cards */}
        <div className={styles.cards}>
          {workExperience.map((job) => (
            <article key={job.slug} className={styles.card}>

              <div className={styles.cardMeta}>
                <span className={styles.cardCompany}>{job.company}</span>
                <span className={styles.cardPeriod}>{job.period}</span>
              </div>

              <h3 className={styles.cardTitle}>{job.title}</h3>

              <p className={styles.cardSummary}>{job.summary}</p>

              <ul className={styles.cardHighlights} aria-label="Key highlights">
                {job.highlights.slice(0, 4).map((highlight, i) => (
                  <li key={i} className={styles.cardHighlight}>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className={styles.cardTags} aria-label="Skills used">
                {job.skills.slice(0, 6).map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>

              {job.caseStudy && (
                <Link
                  href={`/work/${job.slug}`}
                  className={styles.cardLink}
                  aria-label={`Read case study for ${job.company}`}
                >
                  Read Case Study
                  <ArrowIcon />
                </Link>
              )}

            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}