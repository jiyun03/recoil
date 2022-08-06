import { selectorFamily } from "recoil";
import axios from "axios";

export const callFlickr = selectorFamily({
  key: "callFlickr",
  get: (tag) => async () => {
    const key = "4f2ed95542fa600d1ed1488dd32b341b";
    const method_search = "flickr.photos.search";
    const url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=10&nojsoncallback=1&format=json&tags=${tag}`;

    const res = await axios.get(url);
    const body = await res.data;
    return body.photos.photo;
  },
});
