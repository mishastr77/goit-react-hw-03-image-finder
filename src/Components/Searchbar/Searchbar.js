import React from "react";
import PropTypes from "prop-types";
import styles from "./searchbar.module.css";

const Searchbar = ({ onSubmit, onSetQuery, searchQuery }) => (
  <header className={styles.Searchbar}>
    <form onSubmit={onSubmit} className={styles.Searchbar}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        onInput={onSetQuery}
        name="searchQuery"
        value={searchQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSetQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
