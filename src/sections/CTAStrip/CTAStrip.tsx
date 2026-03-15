import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <Container size="sm">

        <h2 id="cta-heading" className={styles.heading}>
          Let's build something{" "}
          <em className={styles.headingAccent}>worth building.</em>
        </h2>

        <p className={styles.sub}>
          Open to full-time roles and interesting freelance projects.
          Especially interested in teams where development and marketing
          strategy intersect.
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:mflanagan7@gmail.com"
            className={styles.btnPrimary}
          >
            Get In Touch
          </a>
          <Link href="/about" className={styles.btnGhost}>
            More About Me
          </Link>
        </div>

      </Container>
    </section>
  );
}