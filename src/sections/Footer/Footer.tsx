import Link from "next/link";
import Container from "@/components/Container/Container";
import { about } from "@/data/about";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>

          <div className={styles.left}>
            <Link href="/" className={styles.name}>
              Michael Flanagan
            </Link>
            <p className={styles.tagline}>
              Frontend Developer &amp; Marketing Technologist
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Site</span>
              <ul className={styles.navList}>
                <li><Link href="/about" className={styles.navLink}>About</Link></li>
                <li><Link href="/work" className={styles.navLink}>Work</Link></li>
                <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
                <li><Link href="/blog" className={styles.navLink}>Blog</Link></li>
              </ul>
            </div>

            <div className={styles.navGroup}>
              <span className={styles.navLabel}>Connect</span>
              <ul className={styles.navList}>
                <li>
                  <a
                    href={about.links.github}
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={about.links.linkedin}
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${about.links.email}`}
                    className={styles.navLink}
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </nav>

        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {year} Michael Flanagan
          </span>
          <span className={styles.built}>
            Built with Next.js &amp; a custom design system
          </span>
        </div>

      </Container>
    </footer>
  );
}