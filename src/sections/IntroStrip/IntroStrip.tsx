import Container from "@/components/Container/Container";
import styles from "./IntroStrip.module.css";

const pills = [
  "HubSpot CMS Dev II",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "HubL",
  "Google Analytics",
  "REST APIs",
  "Web Accessibility",
  "SEO",
  "UTM Tracking",
  "Git",
];

export default function IntroStrip() {
  return (
    <section className={styles.intro} aria-label="About Michael">
      <Container>

        <div className={styles.grid}>

          <p className={styles.text}>
            I write clean code and ask{" "}
            <em className={styles.accent}>why it needs to exist.</em>{" "}
            With a background spanning frontend development, HubSpot CMS,
            marketing operations, and analytics -- I bridge the gap between
            what engineers build and what businesses actually need.
          </p>

          <ul className={styles.pills} aria-label="Core skills">
            {pills.map((pill) => (
              <li key={pill} className={styles.pill}>
                {pill}
              </li>
            ))}
          </ul>

        </div>
      </Container>
    </section>
  );
}