import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { about } from "@/data/about";
import { workExperience } from "@/data/work";
import styles from "./page.module.css";
import PrintButton from "@/components/PrintButton/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Michael Flanagan -- Frontend Developer and Marketing Technologist based in Oklahoma City.",
};

export default function ResumePage() {
  const primaryCerts = about.certifications.filter(
    (c) => c.showOnResume && (c.resumeVersions.includes("all") || c.resumeVersions.includes("marketing-technologist"))
  );

  return (
    <>
      {/* ============================================================
          SUMMARY STRIP
          Fast-scan zone. Name, title, contact, availability.
          This is what gets shared when someone sends your resume link.
      ============================================================ */}
      <section id="resume-summary" className={styles.summary}>
        <Container>
          <div className={styles.summaryInner}>
            <div className={styles.summaryLeft}>
              <div id="resume-availability" className={styles.availabilityBadge}>
                <span className={styles.availabilityDot} aria-hidden="true" />
                Open to new opportunities
              </div>
              <h1 className={styles.summaryName}>{about.name}</h1>
              <p className={styles.summaryTitle}>{about.title}</p>
              <p className={styles.summaryLocation}>{about.location}</p>
              <a data-print="hide" id="resume-download-anchor" href="#resume-downloads" className={styles.downloadAnchor}>
                Download Resume →
              </a>
            </div>

            <nav
              className={styles.summaryLinks}
              aria-label="Contact and profile links"
            >
              <a
                href={`mailto:${about.links.email}`}
                className={styles.summaryLink}
              >
                <EmailIcon />
                {about.links.email}
              </a>
              <a
                href={about.links.github}
                className={styles.summaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
                github.com/MFlanagan7
              </a>
              <a
                href={about.links.linkedin}
                className={styles.summaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
                linkedin.com/in/michael-flanagan
              </a>
              <a
                href={about.links.portfolio}
                className={styles.summaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon />
                michaelflanagan.dev
              </a>
            </nav>
          </div>
        </Container>
      </section>

      {/* ============================================================
          HIGHLIGHTS
          The "do I want to talk to this person" zone.
          Current role, key achievement, skills, education.
          Should fit on one screen on desktop.
      ============================================================ */}
      <section id="resume-highlights" className={styles.highlights} aria-labelledby="highlights-heading">
        <Container>
          <div className={styles.highlightsGrid}>

            {/* Current role */}
            <div className={styles.highlightBlock}>
              <h2 id="highlights-heading" className={styles.blockHeading}>
                Current Role
              </h2>
              {workExperience.slice(0, 1).map((job) => (
                <div key={job.slug} className={styles.roleCard}>
                  <div className={styles.roleHeader}>
                    <span className={styles.roleCompany}>{job.company}</span>
                    <span className={styles.rolePeriod}>{job.period}</span>
                  </div>
                  <p className={styles.roleTitle}>{job.title}</p>

                  {/* Screen -- first 3 highlights only */}
                  <ul
                    data-print="hide"
                    className={styles.roleHighlights}
                    aria-label="Key highlights"
                  >
                    {job.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className={styles.roleHighlight}>{h}</li>
                    ))}
                  </ul>

                  {/* Print -- all highlights */}
                  <ul
                    data-print="show"
                    className={styles.roleHighlights}
                    aria-hidden="true"
                  >
                    {job.highlights.map((h, i) => (
                      <li key={i} className={styles.roleHighlight}>{h}</li>
                    ))}
                  </ul>

                  {/* Hidden on print */}
                  <Link
                    data-print="hide"
                    href={`/work/${job.slug}`}
                    className={styles.caseStudyLink}
                  >
                    Read full case study →
                  </Link>
                </div>
              ))}
            </div>

            {/* Right column -- skills, education, certs */}
            <div id="resume-skills-sidebar" className={styles.highlightSidebar}>

              {/* Core skills */}
              <div className={styles.sidebarBlock}>
                <h2 className={styles.blockHeading}>Core Skills</h2>
                <ul className={styles.skillList} aria-label="Core skills">
                  {about.skills.primary.map((skill) => (
                    <li key={skill} className={`${styles.skillPill} ${styles.skillPillPrimary}`}>
                      {skill}
                    </li>
                  ))}
                  {about.skills.secondary.map((skill) => (
                    <li key={skill} className={styles.skillPill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div id="education-sidebar" className={styles.sidebarBlock}>
                <h2 className={styles.blockHeading}>Education</h2>
                {about.education.map((edu) => (
                  <div key={edu.school} className={styles.eduItem}>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    <p className={styles.eduSchool}>{edu.school}</p>
                    <p className={styles.eduMeta}>
                      {edu.period} &middot; GPA {edu.gpa}
                    </p>
                    {edu.honors.length > 0 && (
                      <p className={styles.eduHonors}>
                        {edu.honors.join(" · ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className={styles.sidebarBlock}>
                <h2 className={styles.blockHeading}>Certifications</h2>
                <ul className={styles.certList} aria-label="Certifications">
                  {primaryCerts.map((cert) => (
                    <li key={cert.name} className={styles.certItem}>
                      <span className={styles.certName}>{cert.name}</span>
                      <span
                        className={styles.certStatus}
                        data-status={cert.status}
                      >
                        {cert.status === "in-progress"
                          ? "In Progress"
                          : cert.status === "expired"
                            ? "Expired"
                            : cert.issued}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          PREVIOUS EXPERIENCE
          MBS role -- brief, supports the current role story.
      ============================================================ */}
      <section id="resume-previous"
        className={`${styles.prevSection}`}
        aria-labelledby="prev-heading"
      >
        <Container>
          <h2 id="prev-heading" className={styles.blockHeading}>
            Previous Experience
          </h2>
          {workExperience.slice(1).map((job) => (
            <div key={job.slug} className={styles.prevRole}>
              <div className={styles.prevRoleHeader}>
                <div>
                  <span className={styles.roleCompany}>{job.company}</span>
                  <p className={styles.roleTitle}>{job.title}</p>
                </div>
                <div className={styles.prevRoleMeta}>
                  <span className={styles.rolePeriod}>{job.period}</span>
                  <span className={styles.rolePeriod}>{job.location}</span>
                </div>
              </div>
              <ul className={styles.roleHighlights}>
                {job.highlights.slice(0, 2).map((h, i) => (
                  <li key={i} className={styles.roleHighlight}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      {/* ============================================================
          DOWNLOAD SECTION
          Three labeled PDFs. One click, file saved, done.
      ============================================================ */}
      <section
        id="resume-downloads"
        className={styles.downloads}
        aria-labelledby="downloads-heading"
      >
        <Container>
          <div className={styles.downloadsHeader}>
            <h2 id="downloads-heading" className={styles.downloadsHeading}>
              Download Resume
            </h2>
            <p className={styles.downloadsSub}>
              Three versions tailored for different role types. Pick the one
              that matches what you're looking for.
            </p>
          </div>

          <ul className={styles.downloadList} aria-label="Resume downloads">
            {about.resumeDownloads.map((dl) => (
              <li key={dl.version} className={styles.downloadItem}>
                <div className={styles.downloadBody}>
                  <span className={styles.downloadLabel}>{dl.label}</span>
                  <span className={styles.downloadDescription}>
                    {dl.description}
                  </span>
                </div>
                <a
                  href={dl.path}
                  download={true}
                  className={styles.downloadBtn}
                  aria-label={`Download ${dl.label} resume PDF`}
                >
                  <DownloadIcon />
                  Download PDF
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.printPrompt}>
            Prefer to print?{" "}
            <PrintButton />{" "}
            -- the print stylesheet produces a clean single-page document
            from the highlights above.
          </p>

        </Container>
      </section>
    </>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function EmailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}