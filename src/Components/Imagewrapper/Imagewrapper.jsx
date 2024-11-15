import { Link } from "react-router-dom";
import styles from "./Imagewrapper.module.css";

const Imagewrapper = ({
  ProjectName,
  imageTag,
  projectId,
  type,
  inbuild,
  title,
}) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {inbuild === true && title === "Development" ? (
        <>
          <div className={`${styles.imageWrapper} ${styles.inactive}`}>
            <div className={styles.overlay}>
              <h1 className={styles.projectTitle}>{type}</h1>
              <h2 className={styles.projectName}>{ProjectName}</h2>
            </div>
            <img src={imageTag} alt={ProjectName} />
          </div>
        </>
      ) : (
        <Link
          to={`/projectdetail/${projectId}`}
          key={projectId}
          onClick={handleLinkClick}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.overlay}>
              <h1 className={styles.projectTitle}>{type}</h1>
              <h2 className={styles.projectName}>{ProjectName}</h2>
            </div>
            <img src={imageTag} alt={ProjectName} />
          </div>
        </Link>
      )}
    </>
  );
};

export default Imagewrapper;
