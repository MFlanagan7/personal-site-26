import Container from "@/components/Container/Container";
import { currently } from "@/data/currently";
import styles from "./Currently.module.css";

export default function Currently() {
  const entries = Object.entries(currently);

  return (
    <section className={styles.section} aria-labelledby="currently-heading">
      <Container>

        <div className={styles.eyebrow}>
          <span
            id="currently-heading"
            className={styles.eyebrowText}
          >
            Currently
          </span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <ul className={styles.grid} aria-label="What Michael is currently doing">
          {entries.map(([key, value]) => (
            <li key={key} className={styles.item}>
              <span className={styles.label}>{key}</span>
              <span className={styles.value}>{value}</span>
            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}