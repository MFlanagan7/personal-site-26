"use client";

import Link from "next/link";
import styles from "./HomepageHero.module.css";
import Container from "@/components/Container/Container";

export default function HomepageHero() {
    return (

        <section className={styles.hero} aria-label="Introduction">
            <Container>

                {/* Availability badge */}
                <div className={styles.availability} aria-label="Availability status">
                    <span className={styles.availabilityDot} aria-hidden="true" />
                    Open to new opportunities
                </div>

                {/* Eyebrow */}
                <div className={styles.eyebrow} aria-hidden="true">
                    <span className={styles.eyebrowLine} />
                    <span className={styles.eyebrowText}>
                        Frontend Developer &amp; Marketing Technologist
                    </span>
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>
                    Developer at the{" "}
                    <em className={styles.headingAccent}>intersection of code</em>{" "}
                    and marketing.
                </h1>

                {/* Tagline */}
                <p className={styles.tagline}>
                    I build and optimize web experiences that drive real business
                    outcomes. Currently at WEOKIE Federal Credit Union, where I
                    sole&#8209;implemented a full website redesign for a $1.5B
                    financial institution.
                </p>

                {/* Actions */}
                <div className={styles.actions}>
                    <Link href="/work" className={styles.btnPrimary}>
                        View My Work
                        <ArrowIcon />
                    </Link>
                    <Link href="/about" className={styles.btnGhost}>
                        About Me
                    </Link>
                </div>

                {/* Location */}
                <p className={styles.location}>
                    <LocationIcon />
                    Oklahoma City, OK
                </p>

            </Container>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}