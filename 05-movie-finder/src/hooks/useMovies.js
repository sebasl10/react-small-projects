import withResults from '../mocks/with-results.json';

export function useMovies(){
  const movies = withResults.Search;
  // GOOD PRACTICE: We need to map the movies so it will be easier to change the name of the properties if the API's contract change in the future, and also to avoid having to change the components if we want to use a different API in the future
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}