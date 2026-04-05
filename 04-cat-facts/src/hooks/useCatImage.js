import { useEffect, useState } from "react";
import { ENDPOINT_CAT_IMAGE } from "../services/constants.js";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    fetch(`${ENDPOINT_CAT_IMAGE}${firstWord}`).then((res) =>
      setImageUrl(res.url),
    );
  }, [fact]);

  return { imageUrl };
}