import React, { Component } from "react";
import "./app.css";

// services
import imagesApi from "./services/imagesApi";

// components
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import LoaderOn from "./Components/Loader";
import Container from "./Components/Container";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    modalImg: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });

    imagesApi
      .fetchImagesWithQuery(searchQuery, 1)
      .then((response) => this.setState({ images: response.data.hits }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, currentPage + 1)
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imagesList").scrollHeight,
          behavior: "smooth",
        });
      });
  };

  onOpenModal = (e) => {
    this.setState({ modalImg: e.target.dataset.source, showModal: true });
  };

  onCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({ showModal: false, modalImg: "" });
    }
  };

  onSetQuery = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.onSubmit}
          onSetQuery={this.onSetQuery}
          searchQuery={this.state.searchQuery}
        />
        {this.state.images.length !== 0 && <LoaderOn />}
        <ImageGallery
          onOpenModal={this.onOpenModal}
          images={this.state.images}
        />
        {this.state.isLoading && <LoaderOn />}
        {this.state.images.length !== 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            onCloseModal={this.onCloseModal}
            modalImg={this.state.modalImg}
          />
        )}
      </Container>
    );
  }
}

export default App;
