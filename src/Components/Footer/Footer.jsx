import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerfooter}>
        <h1 className={styles.h1}>
          <span className={styles.span}>Contact</span> me :
        </h1>

        <div className={styles.flex__footer}>
          <div className={styles.flex__footer_item}>
            <img
              className={styles.footer__icons}
              src="images/footer3.png"
              alt=""
            />
            <p>robin.martens16@hotmail.com</p>
          </div>

          <div className={styles.flex__footer_item}>
            <img
              className={styles.footer__icons}
              src="images/footer2.png"
              alt=""
            />
            <p>0493036077</p>
          </div>

          <div className={styles.flex__footer_item}>
            <img
              className={styles.footer__icons}
              src="images/footer1.png"
              alt=""
            />
            <p>https://www.linkedin.com/in/robin-martens-0b67192a4/</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
