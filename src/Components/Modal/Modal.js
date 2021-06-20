import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.props.onCloseModal(e);
      }
    });
  }

  render() {
    return (
      <div onClick={this.props.onCloseModal} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};
