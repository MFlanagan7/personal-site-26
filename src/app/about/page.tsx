import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader/PageHeader";
import Container from "@/components/Container/Container";
import { about } from "@/data/about";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend developer and marketing technologist based in Oklahoma City. Learn more about Michael Flanagan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        heading="The person behind the code"
        sub="Developer, marketing technologist, occasional tabletop gamemaster."
      />

      {/* Bio */}
      <section className={styles.section} aria-labelledby="bio-heading">
        <Container size="md">
          <h2 id="bio-heading" className={styles.sectionHeading}>
            Background
          </h2>
          <div className={styles.bio}>
            {about.bio.map((paragraph, i) => (
              <p key={i} className={styles.bioParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section
        className={`${styles.section} ${styles.sectionSubtle}`}
        aria-labelledby="skills-heading"
      >
        <Container>
          <h2 id="skills-heading" className={styles.sectionHeading}>
            Skills
          </h2>
          <div className={styles.skillsGrid}>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupLabel}>Primary</h3>
              <ul className={styles.skillList} aria-label="Primary skills">
                {about.skills.primary.map((skill) => (
                  <li key={skill} className={`${styles.skillItem} ${styles.skillItemPrimary}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupLabel}>Secondary</h3>
              <ul className={styles.skillList} aria-label="Secondary skills">
                {about.skills.secondary.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupLabel}>Exploring</h3>
              <ul className={styles.skillList} aria-label="Skills in development">
                {about.skills.exploring.map((skill) => (
                  <li key={skill} className={`${styles.skillItem} ${styles.skillItemDeveloping}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* Education */}
      <section className={styles.section} aria-labelledby="education-heading">
        <Container>
          <h2 id="education-heading" className={styles.sectionHeading}>
            Education
          </h2>
          <div className={styles.eduList}>
            {about.education.map((edu) => (
              <div key={edu.school} className={styles.eduItem}>
                <div className={styles.eduHeader}>
                  <div>
                    <h3 className={styles.eduDegree}>{edu.degree}</h3>
                    <p className={styles.eduSchool}>{edu.school}</p>
                  </div>
                  <div className={styles.eduMeta}>
                    <span className={styles.eduPeriod}>{edu.period}</span>
                    <span className={styles.eduGpa}>GPA {edu.gpa}</span>
                  </div>
                </div>

                {edu.honors.length > 0 && (
                  <div className={styles.eduHonors}>
                    {edu.honors.map((honor) => (
                      <span key={honor} className={styles.honorBadge}>
                        {honor}
                      </span>
                    ))}
                  </div>
                )}

                {edu.note && (
                  <p className={styles.eduNote}>{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section
        className={`${styles.section} ${styles.sectionSubtle}`}
        aria-labelledby="certs-heading"
      >
        <Container>
          <h2 id="certs-heading" className={styles.sectionHeading}>
            Certifications
          </h2>
          <ul className={styles.certList} aria-label="Certifications">
            {about.certifications.map((cert) => (
              <li key={cert.name} className={styles.certItem}>
                <div className={styles.certBody}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                </div>
                <div className={styles.certMeta}>
                  {cert.issued && (
                    <span className={styles.certDate}>
                      {cert.status === "in-progress" ? "In Progress" : cert.issued}
                    </span>
                  )}
                  <span
                    className={styles.certStatus}
                    data-status={cert.status}
                  >
                    {cert.status === "in-progress"
                      ? "In Progress"
                      : cert.status === "expired"
                      ? "Expired"
                      : "Active"}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Connect + resume prompt */}
      <section className={styles.section} aria-labelledby="connect-heading">
        <Container size="md">
          <h2 id="connect-heading" className={styles.sectionHeading}>
            Get In Touch
          </h2>
          <p className={styles.connectText}>
            Open to full-time roles and interesting freelance projects --
            especially where development and marketing strategy intersect.
          </p>
          <div className={styles.connectLinks}>
            <a
              href={`mailto:${about.links.email}`}
              className={styles.btnPrimary}
            >
              Send an Email
            </a>
            <a
              href={about.links.linkedin}
              className={styles.btnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={about.links.github}
              className={styles.btnGhost}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className={styles.resumePrompt}>
            <p className={styles.resumePromptText}>
              Want the full picture?
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