import React from "react";
import PropTypes from "prop-types";
import styles from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ onOpenModal, images }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} onClick={onOpenModal} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        data-source={largeImageURL}
      />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
