export function ListOfMovies({ movies }) {
  return (
    <ul className="movies-grid">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id}>
          <div className="movie-poster-wrapper">
            <img src={movie.poster} alt={movie.title} />
          </div>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
        </li>
      ))}
    </ul>
  );    
}

export function NoResults() {
  return (
    <p className="no-results">
      No movies found. Try searching for something else.
    </p>
  );
}

export function Movies({ movies}) {
  const hasMovies = movies.length > 0;
  return <>{hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />}</>;
}
