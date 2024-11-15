import Progressbar from "../Progressbar/Progressbar";
import Title from "../Title/Title";
import styles from "./Skillset.module.css";

const Skillset = () => {
  return (
    <>
      <Title HeadTitle="robin martens" SubTitle="my skillset" />
      <div className={styles.flex}>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>React</h3>
          <Progressbar progress={75} />
        </div>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>NextJS</h3>
          <Progressbar progress={45} />
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>HTML</h3>
          <Progressbar progress={95} />
        </div>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>Typescript</h3>
          <Progressbar progress={50} />
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>CSS</h3>
          <Progressbar progress={85} />
        </div>
        <div className={styles.progressbar}>
          <h3 className={styles.h3}>Javascript</h3>
          <Progressbar progress={70} />
        </div>
      </div>
    </>
  );
};

export default Skillset;
