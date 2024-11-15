import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, filled, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={filled ? styles.buttonFilled : styles.button}
    >
      {text}
    </a>
  );
};

export default Button;
