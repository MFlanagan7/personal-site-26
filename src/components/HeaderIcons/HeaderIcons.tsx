"use client";

import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./HeaderIcons.module.css";

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25rem"
      height="1.25rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25rem"
      height="1.25rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="5" x2="21" y2="5" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="19" x2="21" y2="19" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25rem"
      height="1.25rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function HeaderIcons() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className={styles.icons}>

      {/* Search -- visible at all screen sizes */}
      <button
        className={styles.iconButton}
        aria-label="Search"
      >
        <SearchIcon />
      </button>

      {/* Hamburger -- visible on mobile only, hidden at 1024px+
          This entire button is display: none at desktop since
          the desktop nav in Nav.tsx takes over */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {/* Mobile dropdown -- anchored to this component on the right.
          Hidden at desktop since the hamburger that triggers it
          is also hidden. Active state still works here since
          HeaderIcons is a client component with usePathname. */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className={styles.mobileMenu}
          role="list"
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                onClick={handleLinkClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}