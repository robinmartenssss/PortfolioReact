import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Portfolio</h1>
      <nav className={styles.nav}>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#projects" className={styles.link}>
          Projects
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
