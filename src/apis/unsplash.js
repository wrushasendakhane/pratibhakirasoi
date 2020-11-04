import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    query: "indian food",
    orientation: "landscape"
  },
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});
