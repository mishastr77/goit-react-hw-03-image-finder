import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21253776-b7abc1a0366653f5e4cb35362";

const fetchImagesWithQuery = (searchQuery, page) => {
  const params = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    q: searchQuery,
    page: page,
    per_page: 12,
    key: API_KEY,
  });
  return axios.get(`${BASE_URL}?${params}`);
};

const exportedObject = {
  fetchImagesWithQuery,
};
export default exportedObject;
