import React from "react";
import styles from "./Projects.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Projectgallery from "../../Components/Projectgallery/Projectgallery";
import Projectintro from "../../Components/Projectintro/Projectintro";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.container__intro}>
          <div className={styles.projects__title}>
            <Title HeadTitle="robin martens" SubTitle="my projects" />
          </div>
          <div className={styles.intro__container}>
            <Projectintro
              textone=" For centuries, humanity has been driven by the desire to be invincible
        and to break records. Now, it’s time to turn that fascination into an
        engaging community experience. My concept centers around a unique
        challenge and accompanying website, aimed at taking on the ultimate
        challenge."
              texttwo=" The chosen theme for my website is the Chinese community, where I
        integrate cultural elements to give the challenge a unique character. My
        website not only includes the step-by-step guide to the challenge but
        also the story behind it, detailed instructions, and potentially even a
        recipe book from participants. By allowing visitors to comment and share
        their experiences, a vibrant online community is created."
              link="https://github.com/robinmartenssss"
              buttontext="Visit Github"
            />
          </div>
        </div>
      </div>

      <Projectgallery title="development" HeadTitle="Projects" />
      <div className={styles.projects__container__design}>
        <Projectgallery title="design" HeadTitle="Projects" />
      </div>

      <div className={styles.container__wrapper}>
        <div className={styles.flex}>
          <img className={styles.img__topleft} src="images/robin1.jpg" alt="" />
          <div className={styles.tech__container}>
            <h2 className={styles.h2}>- My Journey</h2>

            <h1 className={styles.h1}>
              why is started a <br></br>career as developer
            </h1>

            <p
              className={`${styles.journey__text} ${styles.journey__text__first}`}
            >
              As a final note, I want to share why I began coding and creating
              applications to give you a better insight in what kind of person I
              am. As a teenager, I was an avid gamer and loved watching movies.
              As enjoyable as it was, I couldn’t help but ask myself how
              something so beautiful came to be. How do they make these things?
              How do they make them function? Who creates these things?
            </p>
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.text__container__second}>
            <p className={styles.journey__text}>
              That was my spirit and drive until this day, I wanted to be able
              to create beautiful, impactful, and well-functioning applications
              and games to help people and customers. I was very excited when I
              stumbled upon Bitsoflove through word-of-mouth and learned that
              you make learning fun through interaction and create cutting-edge
              software with a delightful user interface. 
            </p>
            <div className={styles.journey__button}>
              <Button
                filled={true}
                link="https://github.com/robinmartenssss"
                text="Visit github"
              />
            </div>
          </div>
          <img className={styles.img__center} src="images/robin2.jpg" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;
