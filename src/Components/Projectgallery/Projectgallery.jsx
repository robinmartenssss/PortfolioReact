import Imagewrapper from "../Imagewrapper/Imagewrapper";
import Title from "../Title/Title";
import styles from "./Projectgallery.module.css";

const Projectgallery = ({ title, HeadTitle = "robin martens" }) => {
  const projects = [
    {
      id: "china-community",
      type: "Development",
      name: "China Community",
      image: "../images/gallery_4.jpg",
      inbuild: false,
    },
    {
      id: "wild-west",
      type: "Development",
      name: "Wild West Cruise",
      image: "../images/gallery_7.jpg",
      inbuild: true,
    },
    {
      id: "Saxophone",
      type: "Development",
      name: "MIM Saxophone",
      image: "../images/gallery_6.jpg",
      inbuild: true,
    },
    {
      id: "form-case",
      type: "Development",
      name: "Form Case",
      image: "../images/gallery_8.jpg",
      inbuild: true,
    },
    {
      id: "saxophone",
      type: "Design",
      name: "Saxophone MIM",
      image: "../images/gallery_6_2.png",
      inbuild: false,
    },
    {
      id: "punch",
      type: "Design",
      name: "Punch",
      image: "../images/gallery_2.jpg",
      inbuild: false,
    },
    {
      id: "telenet",
      type: "Design",
      name: "Telenet Campagne",
      image: "../images/gallery_1.jpg",
      inbuild: false,
    },
    {
      id: "cocktail-app",
      type: "Design",
      name: "Cocktail app",
      image: "../images/gallery_5.png",
      inbuild: false,
    },
  ];

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const filteredProjects =
    title.toLowerCase() === "other creations" ||
    title.toLowerCase() === "my creations"
      ? shuffleArray(
          projects.filter((project) => project.inbuild === false).slice(0, 4)
        )
      : projects
          .filter(
            (project) => project.type.toLowerCase() === title.toLowerCase()
          )
          .slice(0, 4);

  return (
    <div className={styles.container}>
      <Title HeadTitle={HeadTitle} SubTitle={title} />
      <div className={styles.img__container}>
        {filteredProjects.map((project) => (
          <Imagewrapper
            key={project.id}
            title={project.type}
            inbuild={project.inbuild}
            ProjectName={project.name}
            imageTag={project.image}
            projectId={project.id}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Projectgallery;
