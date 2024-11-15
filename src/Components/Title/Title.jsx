import React from "react";
import styles from "./Title.module.css";

const Title = ({ HeadTitle, SubTitle }) => {
  const words = SubTitle.split(" ");

  const formattedSubtitle = words.map((word, index) => {
    if (index === 1) {
      return (
        <span key={index} className={styles.orangeText}>
          {word}
        </span>
      );
    }
    return word + " ";
  });

  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.subTitle}>{formattedSubtitle}</h2>
      <h1 className={styles.headTitle}>{HeadTitle}</h1>
    </div>
  );
};

export default Title;
