import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={styles.Button} type="button">
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
