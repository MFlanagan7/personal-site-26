import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Container size="sm">
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.sub}>
          This page doesn't exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            Back to Home
          </Link>
          <Link href="/work" className={styles.btnGhost}>
            View My Work
          </Link>
        </div>
      </Container>
    </div>
  );
}