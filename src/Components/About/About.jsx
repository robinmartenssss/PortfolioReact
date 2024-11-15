import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Title HeadTitle="robin martens" SubTitle="about me" />
      <div className={styles.container__text}>
        <p className={styles.text}>
          Hello, I'm Robin Martens, 25 years old, from the Waarschoot/Adegem
          region. I am a front-end developer with a strong background in design,
          and my expertise lies in React. I have a passion for creating engaging
          and user-friendly applications that provide unforgettable experiences.
          My design and research knowledge helps me develop solutions that
          perfectly align with user expectations, ensuring both functionality
          and excellent user experience.
        </p>

        <p className={styles.text}>
          With a keen eye for detail and a constant drive to improve myself, I
          am open-minded and eager to embrace new challenges. I am actively
          seeking an inspiring workplace where I can further develop my skills,
          broaden my knowledge, and contribute to innovative projects. I am
          excited to collaborate with a team, grow together, and add value to
          the projects and the company I work with.
        </p>
      </div>
      <Button text="Download CV" filled={true} />
    </div>
  );
};

export default About;
