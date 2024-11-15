import React from "react";
import styles from "./Home.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Intro from "../../Components/Intro/Intro";
import About from "../../Components/About/About";
import Projectgallery from "../../Components/Projectgallery/Projectgallery";
import Skillset from "../../Components/Skillset/Skillset";
import Perks from "../../Components/Perks/Perks";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <img className={styles.art_left} src="images/art_left.png" alt="" />
      <div className={styles.container}>
        <About />
      </div>
      <div className={styles.artcontainer}>
        <img className={styles.art_right} src="images/art_right.png" alt="" />
      </div>

      <Projectgallery title="my creations" />

      <img className={styles.art_left} src="images/art_left.png" alt="" />
      <div className={styles.container}>
        <Skillset />
      </div>
      <div className={styles.artcontainer}>
        <img className={styles.art_right} src="images/art_right.png" alt="" />
      </div>

      <div className={styles.container}>
        <Perks />
      </div>

      <Footer />
    </>
  );
};

export default Home;
