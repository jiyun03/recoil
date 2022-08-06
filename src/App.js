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

  useEffect(() => {
    callFlickr();
  }, [tag]);

  return (
    <>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/sub" component={Sub} />
    </>
  );
}

export default App;
