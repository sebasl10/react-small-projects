import "./App.css";
import { useCatFact } from "./hooks/useCatFact.js";
import { useCatImage } from "./hooks/useCatImage.js";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

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
      <button className="btn-fetch" onClick={refreshFact}>
        Get new fact
      </button>
    </main>
  );
}

export default App;
