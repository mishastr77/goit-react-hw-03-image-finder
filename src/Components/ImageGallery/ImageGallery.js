import React from "react";
import styles from "./imageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ onOpenModal, images }) => (
  <ul className={styles.ImageGallery} id="imagesList">
    <ImageGalleryItem images={images} onOpenModal={onOpenModal} />
  </ul>
);

export default ImageGallery;
