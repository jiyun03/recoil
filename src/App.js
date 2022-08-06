import { Route } from "react-router-dom";
import Main from "./Main";
import Sub from "./Sub";
import Header from "./Header";
import GetFlickr from "./GetFlickr";
import React from "react";

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <GetFlickr />
      </React.Suspense>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/sub" component={Sub} />
    </>
  );
}

export default App;
