"use client";

import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">

      {/* Desktop links only -- hidden on mobile via CSS.
          No hamburger here. Nav is purely links. */}
      <ul className={styles.desktopMenu} role="list">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  );
}