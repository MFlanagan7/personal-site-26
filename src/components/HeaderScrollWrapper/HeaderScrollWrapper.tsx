"use client";

import { useEffect, useState } from "react";
import styles from "./HeaderScrollWrapper.module.css";

interface HeaderScrollWrapperProps {
  children: React.ReactNode;
}

export default function HeaderScrollWrapper({
  children,
}: HeaderScrollWrapperProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      {children}
    </div>
  );
}