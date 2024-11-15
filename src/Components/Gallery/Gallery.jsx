import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import styles from "./Gallery.module.css";

const Gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <>
            <img
              key={index}
              src={image.src}
              alt={`gallery-${index}`}
              className={`${styles.gallery_image} ${
                index % 2 === 0 ? styles.span2 : styles.span1
              }`}
              onClick={() => handleImageClick(index)}
            />
          </>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images}
          index={currentIndex}
          on={{
            click: () => setIsOpen(false),
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
