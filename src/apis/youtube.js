import axios from "axios";

const KEY = "AIzaSyCPd-GhTRfH8KJI7pZ3J0epjBrv81SjO-I";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});