import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { flickrState, tagState } from "./atoms";

import { Route } from "react-router-dom";
import Main from "./Main";
import Sub from "./Sub";
import Header from "./Header";

function App() {
  const [_, setPic] = useRecoilState(flickrState);
  const tag = useRecoilValue(tagState);

  const callFlickr = async () => {
    const key = "4f2ed95542fa600d1ed1488dd32b341b";
    const method_search = "flickr.photos.search";
    const url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=10&nojsoncallback=1&format=json&tags=${tag}`;

    const res = await fetch(url);
    const body = await res.json();
    setPic(body.photos.photo);
  };

  useEffect(() => {
    callFlickr();
  }, []);

  return (
    <>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/sub" component={Sub} />
    </>
  );
}

export default App;
