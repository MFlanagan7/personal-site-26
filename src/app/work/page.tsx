import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader/PageHeader";
import Container from "@/components/Container/Container";
import { workExperience } from "@/data/work";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Professional experience and case studies from Michael Flanagan -- frontend developer and marketing technologist.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        heading="Where I've made an impact"
        sub="Professional experience, case studies, and the work behind the work."
      />

      <section className={styles.section}>
        <Container>
          <ol className={styles.list} aria-label="Work experience">
            {workExperience.map((job) => (
              <li key={job.slug} className={styles.item}>

                <div className={styles.itemMeta}>
                  <span className={styles.itemPeriod}>{job.period}</span>
                  <span className={styles.itemType}>{job.companyType}</span>
                </div>

                <div className={styles.itemBody}>
                  <div className={styles.itemHeader}>
                    <span className={styles.itemCompany}>{job.company}</span>
                    <h2 className={styles.itemTitle}>{job.title}</h2>
                    <p className={styles.itemLocation}>{job.location}</p>
                  </div>

                  <p className={styles.itemSummary}>{job.summary}</p>

                  <ul className={styles.itemHighlights} aria-label="Key highlights">
                    {job.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className={styles.itemHighlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.itemSkills} aria-label="Skills">
                    {job.skills.slice(0, 6).map((skill) => (
                      <span key={skill} className={styles.tag}>{skill}</span>
                    ))}
                  </div>

                  {job.caseStudy && (
                    <Link
                      href={`/work/${job.slug}`}
                      className={styles.caseStudyLink}
                      aria-label={`Read full case study for ${job.company}`}
                    >
                      Read Case Study
                      <ArrowIcon />
                    </Link>
                  )}
                </div>

              </li>
            ))}
          </ol>

          {/* Resume link -- one level deep from nav, visible on work page */}
          <div className={styles.resumePrompt}>
            <p className={styles.resumeText}>
              Looking for the full picture?
            </p>
            <Link href="/resume" className={styles.resumeLink}>
              View Full Resume →
            </Link>
          </div>

        </Container>
      </section>
    </>
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