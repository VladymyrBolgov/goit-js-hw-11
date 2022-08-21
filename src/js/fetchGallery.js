const axios = require("axios").default;

const fetchGallery = async (value, step) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=29230094-1d6fe7151785ccfc3d660c9e4&q=${value}&image_type=photo&orientation=horizontal&safesearc=true&per_page=40&page=${step}`
  );
   return response;
};
export default fetchGallery;


