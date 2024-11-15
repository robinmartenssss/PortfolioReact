import React from "react";
import styles from "./Projectdetail.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Gallery from "../../Components/Gallery/Gallery";
import Projectgallery from "../../Components/Projectgallery/Projectgallery";
import Projectintro from "../../Components/Projectintro/Projectintro";
import { useParams } from "react-router-dom";

const projectData = {
  "china-community": {
    title: "China Community",
    subtitle: "Development",
    introTextOne:
      "For centuries, humanity has been driven by the desire to be invincible and to break records. Now, it’s time to turn that fascination into an engaging community experience. My concept centers around a unique challenge and accompanying website, aimed at taking on the ultimate challenge.",
    introTextTwo:
      " The chosen theme for my website is the Chinese community, where I integrate cultural elements to give the challenge a unique character. My website not only includes the step-by-step guide to the challenge but also the story behind it, detailed instructions, and potentially even a recipe book from participants. By allowing visitors to comment and share their experiences, a vibrant online community is created.",
    link: "https://www.designs-martens.be/int2/ChinaInt2/",
    images: [
      { src: "../images/china/C_foto1.png" },
      { src: "../images/china/C_foto2.png" },
      { src: "../images/china/C_foto3.png" },
      { src: "../images/china/C_foto4.png" },
      { src: "../images/china/C_foto5.png" },
      { src: "../images/china/C_foto6.png" },
      { src: "../images/china/C_foto7.png" },
      { src: "../images/china/C_foto8.png" },
      { src: "../images/china/C_foto9.png" },
      { src: "../images/china/C_foto10.png" },
      { src: "../images/china/C_foto11.png" },
      { src: "../images/china/C_foto12.png" },
      { src: "../images/china/C_foto13.png" },
    ],
  },
  punch: {
    title: "Punch",
    subtitle: "Design",
    introTextOne:
      "Club Sofa, an emerging subscription service, introduces innovative cocktails through monthly or bimonthly boxes. Summer 2023 marks the launch in Antwerp. The design brief consisted of two parts.",
    introTextTwo:
      "Art Direction & Branding: The goal was to give the digital brand a new face, taking into account the target audience, brand values ​​and the product. A compelling brand presentation sheet with a brand board presented style elements including branding, logo, color, patterns, photo styling, illustrations, typography, icons, animations, packaging and other derivatives.",
    link: null,
    explanation:
      "From designing the logo to determining the color palette, I create harmony between the client's expectations, the needs of the target group and my own creative vision. <br></br><br></br> With complete artistic freedom, I take control in creating striking packaging. By exploring various mock-up templates for bottles and cans, and crafting labels, I shape an identity that reflects the energy and freshness of these drinks.",
    images: [
      { src: "../images/punch/punch1.png" },
      { src: "../images/punch/punch2.png" },
      { src: "../images/punch/punch3.png" },
      { src: "../images/punch/punch4.png" },
      { src: "../images/punch/punch5.png" },
      { src: "../images/punch/punch6.png" },
      { src: "../images/punch/punch7.png" },
      { src: "../images/punch/punch8.png" },
      { src: "../images/punch/punch9.png" },
      { src: "../images/punch/punch10.png" },
      { src: "../images/punch/punch11.png" },
      { src: "../images/punch/punch12.jpg" },
      { src: "../images/punch/punch13.jpg" },
      { src: "../images/punch/punch14.jpg" },
    ],
  },
  telenet: {
    title: "Telenet Campagne",
    subtitle: "Design",
    introTextOne:
      "The campaign aims to activate people by making them aware of the importance of their contribution and encouraging them to take action. The concept revolves around a digital tree in which participants work together through donations and form one large community. This idea not only provides a practical solution to the digital divide, but also creates a positive and engaged online community.",
    introTextTwo:
      "The campaign website, with a unique design that suits Telenet, offers an interactive and visual experience. The concept image of the campaign illustrates the collaboration and positive impact of donations. The website emphasizes storytelling and invites users to participate in the action in a fun way.",
    link: "https://figma.com/proto/2PAS7kRxeNSCDh5mLesmJP/2DEV1_Martens_Robin_Telenet_Campagne_Herexamen?page-id=0%3A1&type=design&node-id=150-12373&viewport=-14022%2C3105%2C0.14&t=EtMgZCEMOTZyshOn-1&scaling=scale-down&starting-point-node-id=150%3A12373",
    explanation:
      "From designing the logo to determining the color palette, I create harmony between the client's expectations, the needs of the target group and my own creative vision. <br></br><br></br> With complete artistic freedom, I take control in creating striking packaging. By exploring various mock-up templates for bottles and cans, and crafting labels, I shape an identity that reflects the energy and freshness of these drinks.",
    images: [
      { src: "../images/telenet/telenet1.png" },
      { src: "../images/telenet/telenet2.png" },
      { src: "../images/telenet/telenet3.png" },
      { src: "../images/telenet/telenet4.png" },
      { src: "../images/telenet/telenet5.png" },
      { src: "../images/telenet/telenet6.png" },
      { src: "../images/telenet/telenet7.png" },
      { src: "../images/telenet/telenet8.jpg" },
      { src: "../images/telenet/telenet9.jpg" },
      { src: "../images/telenet/telenet10.jpg" },
      { src: "../images/telenet/telenet11.jpg" },
      { src: "../images/telenet/telenet12.jpg" },
      { src: "../images/telenet/telenet13.jpg" },
    ],
  },
  "cocktail-app": {
    title: "Cocktail App",
    subtitle: "Design",
    introTextOne:
      "Club Sofa, an emerging subscription service, introduces innovative cocktails through monthly or bimonthly boxes. Summer 2023 marks the launch in Antwerp. The design brief consisted of two parts.",
    introTextTwo:
      "Art Direction & Branding: The goal was to give the digital brand a new face, taking into account the target audience, brand values ​​and the product. A compelling brand presentation sheet with a brand board presented style elements including branding, logo, color, patterns, photo styling, illustrations, typography, icons, animations, packaging and other derivatives.",
    link: "https://www.figma.com/proto/Ak0T2wYF50FrOWMM158xmf/Clubsofa_martenssRobin?page-id=1:20&type=design&node-id=301-9450&viewport=-15077,8022,0.61&t=SN1KeCHcg1VxKwPw-1&scaling=scale-down&starting-point-node-id=301:9450&show-proto-sidebar=1&mode=design",
    explanation:
      "App Design: The supporting app for Club Sofa, where users can manage their boxes and consult cocktail recipes, has been designed. The design included UX considerations for ease of use, visual hierarchy and feedback, presented to the client via a polished clickable mockup. The app, an extension of the brand, followed a contemporary design approach, where branding and tone of voice were palpable. Smart solutions were applied to optimize ease of use, and animations were used functionally.",
    images: [
      { src: "../images/cocktail/cocktail1.jpg" },
      { src: "../images/cocktail/cocktail2.jpg" },
      { src: "../images/cocktail/cocktail3.jpg" },
      { src: "../images/cocktail/cocktail4.jpg" },
      { src: "../images/cocktail/cocktail5.jpg" },
      { src: "../images/cocktail/cocktail6.jpg" },
      { src: "../images/cocktail/cocktail7.jpg" },
      { src: "../images/cocktail/cocktail8.jpg" },
      { src: "../images/cocktail/cocktail9.jpg" },
      { src: "../images/cocktail/cocktail10.jpg" },
      { src: "../images/cocktail/cocktail11.jpg" },
      { src: "../images/cocktail/cocktail12.jpg" },
      { src: "../images/cocktail/cocktail13.jpg" },
    ],
  },
  saxophone: {
    title: "Saxophone MIM",
    subtitle: "Design",
    introTextOne:
      "My created website for the Musical Instrument Museum (MIM) is dedicated to the saxophone as the central instrument. The saxophone has a fascinating history: once very popular, it fell into obscurity, but made a remarkable comeback in the 2011s.",
    introTextTwo:
      "Mijn ontwerp illustreert deze evolutie aan de hand van iconische artiesten die een cruciale rol speelden in de heropleving van de saxofoon.",
    link: null,
    explanation:
      "The website invites visitors to discover the remarkable comeback of the saxophone, with a focus on the impact of renowned musicians from different genres. Through an interactive long read, users are taken on a journey in which they can read, see and listen to the influential role of the saxophone in music history. The graphic design and modern interpretation match the identity of the MIM, while at the same time offering a fresh and contemporary approach. The website not only encourages exploration and learning, but also strengthens the bond between the museum and the public. The rich visual decoration and interactions, such as scrolling, effects and music, enrich the user experience and give the audience a deeper insight into the world of the saxophone.",
    images: [
      { src: "../images/saxophone/saxophone1.png" },
      { src: "../images/saxophone/saxophone2.png" },
      { src: "../images/saxophone/saxophone3.png" },
      { src: "../images/saxophone/saxophone4.png" },
      { src: "../images/saxophone/saxophone5.png" },
      { src: "../images/saxophone/saxophone6.png" },
      { src: "../images/saxophone/saxophone7.png" },
      { src: "../images/saxophone/saxophone8.png" },
      { src: "../images/saxophone/saxophone9.png" },
      { src: "../images/saxophone/saxophone10.png" },
      { src: "../images/saxophone/saxophone11.png" },
      { src: "../images/saxophone/saxophone12.png" },
      { src: "../images/saxophone/saxophone13.png" },
    ],
  },
};

const Projectdetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return <p>Project not found</p>;
  }

  console.log(project.images);

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.container__intro}>
          <h3 className={styles.h3}>{project.subtitle}</h3>
          <h1 className={styles.h1}>{project.title}</h1>
          <Projectintro
            subitlte={project.subtitle}
            textone={project.introTextOne}
            texttwo={project.introTextTwo}
            link={project.link}
          />
        </div>
      </div>

      <Gallery images={project.images} />

      <div className={styles.container__wrapper}>
        <div className={styles.flex}>
          {project.subtitle === "Design" ? (
            <div></div>
          ) : (
            <img
              className={styles.img__topleft}
              src={`../${project.images[10]?.src}`}
              alt=""
            />
          )}
          <div className={styles.tech__container}>
            <h2 className={styles.h2}>
              - {project.subtitle === "Design" ? "Design Methods" : "Techstack"}
            </h2>

            <h1 className={styles.h1}>
              {project.subtitle === "Design"
                ? "Explanation"
                : "Technologies used"}
            </h1>

            {project.subtitle === "Design" ? (
              <div className={styles.techstack_container}>
                <p className={styles.p}>{project.explanation}</p>
              </div>
            ) : (
              <div className={styles.techstack_container}>
                <div className={`${styles.flexicon} ${styles.imgWrapper}`}>
                  <img
                    className={styles.tech__img}
                    src="../images/css.svg"
                    alt="css"
                  />
                  <p className={styles.p}>CSS</p>
                </div>
                <div className={`${styles.flexicon} ${styles.imgWrapper}`}>
                  <img
                    className={styles.tech__img}
                    src="../images/html.png"
                    alt="html"
                  />
                  <p className={styles.p}>HTML</p>
                </div>
                <div className={`${styles.flexicon} ${styles.imgWrapper}`}>
                  <img
                    className={styles.tech__img}
                    src="../images/php.png"
                    alt="svg"
                  />
                  <p className={styles.p}>PHP</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {project.subtitle === "Design" ? (
          <div></div>
        ) : (
          <img
            className={styles.img__center}
            src={`../${project.images[11]?.src}`}
            alt=""
          />
        )}
      </div>

      <Projectgallery title="other creations" />
    </>
  );
};

export default Projectdetail;
