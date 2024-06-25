import filmsResults from '../mocks/films-results.json'

export function useMovies () {
    const movies = filmsResults.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  
      
    return {movies: mappedMovies}
  
    }