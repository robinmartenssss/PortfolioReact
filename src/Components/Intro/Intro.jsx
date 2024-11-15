import React from "react";
import styles from "./Intro.module.css";
import Button from "../Button/Button";

const Intro = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="images/foto_robin.jpg" alt="" />
      <div className={styles.container__info}>
        <h1>I’m Robin Martens</h1>
        <h2>Front-End Developer & UI/UX </h2>
        <p className={styles.text}>
          I’m an enthusiastic developer passionate about creating engaging
          applications that deliver unforgettable user experiences. I thrive on
          finding creative, practical solutions to challenges, and I’m always
          driven to achieve the best possible outcomes for both the team and our
          clients.
        </p>

        {/* <div className={styles.intro__button}>
          <Button text="More about me" filled={false} />
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
