import Button from "../Button/Button";
import styles from "./Projectintro.module.css";

const Projectintro = ({
  textone,
  texttwo,
  subtitle,
  link,
  buttontext = "Visit Website",
}) => {
  return (
    <div>
      <p className={styles.p}>{textone}</p>
      <div className={styles.divider}></div>
      <p className={styles.p}>{texttwo}</p>
      {link === null ? (
        <div></div>
      ) : (
        <div className={styles.button}>
          <Button
            filled={true}
            text={
              subtitle === "design" ||
              link === "https://github.com/robinmartenssss"
                ? buttontext
                : "prototype"
            }
            link={link}
          />
        </div>
      )}
    </div>
  );
};

export default Projectintro;
