import styles from "./Progressbar.module.css";

const Progressbar = ({ progress }) => {
  const progressValue = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={styles.progressbarcontainer}>
      <div className={styles.progressbarbackground}>
        <div
          className={styles.progressbarfill}
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
