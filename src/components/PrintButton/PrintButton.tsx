"use client";

import styles from "./PrintButton.module.css";

export default function PrintButton() {
  return (
    <button
      className={styles.btn}
      onClick={() => window.print()}
      aria-label="Print this page"
    >
      Print this page
    </button>
  );
}