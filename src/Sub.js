import { useRecoilState, useRecoilValue } from "recoil";
import { flickrState, tagState } from "./atoms";

import { useRef, useEffect } from "react";

function Sub() {
  const pics = useRecoilValue(flickrState);

  const input = useRef(null);
  const [Tag, setTag] = useRecoilState(tagState);

  useEffect(() => {
    console.log(Tag);
  }, [Tag]);

  return (
    <section>
      <h1>SUB</h1>
      <input type="text" ref={input} />
      <button onClick={() => setTag(input.current.value)}>search</button>
      {pics.map((pic) => {
        return (
          <article key={pic.id}>
            <h2>{pic.title}</h2>
            <img
              src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
              alt={pic.title}
            />
          </article>
        );
      })}
    </section>
  );
}

export default Sub;
