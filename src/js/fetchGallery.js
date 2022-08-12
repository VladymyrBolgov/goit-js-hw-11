const axios = require("axios").default;

const fetchGallery = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      createList(response.date);
    } catch (error) {
      console.log(error);
    }
  }
  fetchGallery();