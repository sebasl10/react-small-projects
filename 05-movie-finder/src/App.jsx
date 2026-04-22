import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";

function App() {
  const { movies }= useMovies();

  return (
    <div className="page">
      <header className="hero-header">
        <h1>Movie Finder</h1>
        <form className="search-form">
          <input type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
