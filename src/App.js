import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { flickrState, tagState } from "./atoms";

function App() {
  const [Pics, setPic] = useRecoilState(flickrState);
  const tag = useRecoilValue(tagState);

  const callFlickr = async () => {
    const key = "4f2ed95542fa600d1ed1488dd32b341b";
    const method_search = "flickr.photos.search";
    const url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=10&nojsoncallback=1&format=json&tags=${tag}`;

    const res = await fetch(url);
    const body = await res.json();

    console.log(body.photos.photo);
    setPic(body.photos.photo);
  };

  useEffect(() => {
    callFlickr();
  }, []);

  return (
    <div>
      {Pics.map((pic) => {
        return (
          <article key={pic.id}>
            <h2>{pic.title}</h2>
          </article>
        );
      })}
    </div>
  );
}

export default App;
