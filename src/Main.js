import { useRecoilValue } from "recoil";
import { flickrState } from "./atoms";

function Main() {
  const pics = useRecoilValue(flickrState);

  return (
    <section>
      {pics.map((pic, idx) => {
        if (idx < 5) {
          return (
            <article key={pic.id}>
              <h2>{pic.title}</h2>
              <img
                src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
                alt={pic.title}
              />
            </article>
          );
        }
      })}
    </section>
  );
}

export default Main;
