import Title from "../Title/Title";
import styles from "./Perks.module.css";

const Perks = () => {
  return (
    <div className={styles.container}>
      <Title HeadTitle="robin martens" SubTitle="my capabilities" />
      <div className={styles.grid}>
        <div className={styles.sjabloon__container}>
          <img src="images/Sjabloon1.png" alt="" />
          <p className={styles.subtitle}>User interface</p>
          <p className={styles.p}>
            User Interface design is about crafting visually appealing and
            functional layouts that make interactions easy and enjoyable for the
            user.
          </p>
        </div>

        <div className={styles.sjabloon__container}>
          <img src="images/Sjabloon2.png" alt="" />
          <p className={styles.subtitle}>Memorable Experience</p>
          <p className={styles.p}>
            A memorable experience leaves a lasting impression by connecting
            with the user on an emotional level, often exceeding their
            expectations.
          </p>
        </div>

        <div className={styles.sjabloon__container}>
          <img src="images/Sjabloon3.png" alt="" />
          <p className={styles.subtitle}>User Experience</p>
          <p className={styles.p}>
            User Experience focuses on creating a smooth, enjoyable journey for
            users, ensuring every interaction feels intuitive and valuable.
          </p>
        </div>

        <div className={styles.sjabloon__container}>
          <img
            className={styles.sjabloon__code}
            src="images/Sjabloon4.png"
            alt=""
          />
          <p className={styles.subtitle}>Clean/Reusable Code</p>
          <p className={styles.p}>
            I prioritize writing clean, well-organized code that’s easy to read,
            maintain, and reuse, ensuring long-term efficiency in development.
          </p>
        </div>

        <div className={styles.sjabloon__container}>
          <img src="images/Sjabloon5.png" alt="" />
          <p className={styles.subtitle}>Adobe Programs</p>
          <p className={styles.p}>
            I'm experienced with essential Adobe programs, which allows me to
            incorporate design principles seamlessly into my development work.
          </p>
        </div>

        <div className={styles.sjabloon__container}>
          <img src="images/Sjabloon6.png" alt="" />
          <p className={styles.subtitle}>Out of the box thinking</p>
          <p className={styles.p}>
            I’m an out-of-the-box thinker who consistently generates innovative
            yet practical solutions that align with project goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
