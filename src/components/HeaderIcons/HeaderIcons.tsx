"use client";

import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./HeaderIcons.module.css";

function BlueskyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.505 6.5.136.94.799 3.156 2.709 3.455 2.228.348 4.617.193 6.786-.043zm0 0c1.087-2.114 4.046-6.053 6.798-7.995 2.636-1.861 3.641-1.539 4.3-1.24.763.343.902 1.515.902 2.203 0 .69-.378 5.65-.505 6.5-.136.94-.799 3.156-2.709 3.455-2.228.348-4.617.193-6.786-.043zm0 2.8c-1.8 2.5-5.5 6.5-8 7.5-1.5.6-2.5.2-3-.5-.6-.8-.4-2 .5-3.5L12 13.6l10.5 3.5c.9 1.5 1.1 2.7.5 3.5-.5.7-1.5 1.1-3 .5-2.5-1-6.2-5-8-7.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
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
      width="1.5rem"
      height="1.5rem"
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
      width="1.5rem"
      height="1.5rem"
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

      {/* Social links -- visible at all screen sizes */}
      <a
        href="https://bsky.app/profile/michaelflanagan.dev"
        className={styles.iconLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bluesky profile"
      >
        <BlueskyIcon />
      </a>

      <a
        href="https://linkedin.com/in/michael-flanagan"
        className={styles.iconLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://github.com/MFlanagan7"
        className={styles.iconLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <GitHubIcon />
      </a>

      {/* Search button -- coming in a future update */}
      {/* <button
        className={styles.iconButton}
        aria-label="Search"
      >
        <SearchIcon />
      </button> */}

      {/* Hamburger -- mobile only */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </button>

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