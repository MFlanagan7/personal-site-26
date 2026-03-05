import Container from "@/components/Container/Container";
import styles from "./SkillsStrip.module.css";

const skills = {
  primary: [
    "JavaScript",
    "HubSpot CMS",
    "React",
    "HTML & CSS",
  ],
  secondary: [
    "TypeScript",
    "Next.js",
    "HubL",
    "Google Analytics",
    "REST APIs",
    "Accessibility",
    "SEO",
    "Git",
  ],
};

export default function SkillsStrip() {
  return (
    <section className={styles.section} aria-labelledby="skills-heading">
      <Container>
        <p
          id="skills-heading"
          className={styles.label}
        >
          Core Skills
        </p>
        <ul className={styles.list} aria-label="Skills list">
          {skills.primary.map((skill) => (
            <li key={skill} className={`${styles.item} ${styles.itemPrimary}`}>
              {skill}
            </li>
          ))}
          {skills.secondary.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}