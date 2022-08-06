import { callFlickr } from "./api";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { flickrState, tagState } from "./atoms";

function GetFlickr() {
  const [_, setPic] = useRecoilState(flickrState);
  const tag = useRecoilValue(tagState);
  const result = useRecoilValue(callFlickr(tag));

  useEffect(() => {
    setPic(result);
  }, [tag]);

  return null;
}

export default GetFlickr;
