import "./App.css";
import { useEffect, useState } from "react";

const ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
const ENDPOINT_CAT_IMAGE = "https://cataas.com/cat/says/";

function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
      });
  }, []);

  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(" ")[0];
      fetch(`${ENDPOINT_CAT_IMAGE}${firstWord}`).then((res) =>
        setImageUrl(res.url),
      );
    }
  }, [fact]);

  return (
    <main className="app-container">
      <h1 className="title">Cat Facts</h1>
      <section className="card">
        {fact && <p className="fact-text">{fact}</p>}
        {imageUrl && (
          <div className="cat-image-wrapper">
            <img
              className="cat-image"
              src={imageUrl}
              alt="Cat image with the first word of the facts"
            />
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
