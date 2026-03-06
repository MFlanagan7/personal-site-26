import Container from "@/components/Container/Container";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  eyebrow: string;
  heading: string;
  sub?: string;
}

export default function PageHeader({ eyebrow, heading, sub }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <Container>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>{eyebrow}</span>
        </div>
        <h1 className={styles.heading}>{heading}</h1>
        {sub && <p className={styles.sub}>{sub}</p>}
      </Container>
    </section>
  );
}