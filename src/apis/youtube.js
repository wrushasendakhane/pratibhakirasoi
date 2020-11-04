import axios from "axios"
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    order: "date",
    key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    maxResults: 20,
  }
});
export default youtube;