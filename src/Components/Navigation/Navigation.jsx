import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.span}>Robin </span>Martens
      </h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <p>Projects</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
