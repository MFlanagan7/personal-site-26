import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import Container from "@/components/Container/Container";
import styles from "./Header.module.css";
import HeaderIcons from "@/components/HeaderIcons/HeaderIcons";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>

        {/* Left group -- logo and desktop nav sit snug together.
            On mobile this group is just the logo since the desktop
            nav is hidden via CSS. The hamburger lives in HeaderIcons
            on mobile. */}
        <div className={styles.leftGroup}>
          <Link href="/" className={styles.logo}>
            Michael Flanagan
          </Link>
          <Nav />
        </div>

        {/* Right group -- icons always on the far right.
            On mobile this includes the search AND hamburger.
            On desktop this is search only. */}
        <HeaderIcons />

      </Container>
    </header>
  );
}