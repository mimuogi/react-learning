function ListOfMovies({movies}) {
    return (
        <ul>{
          movies.map( movie =>
          <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
          )
        }
        </ul>)
}


function NoMoviesResults(){
    return (
    <p>No results for this search</p>
    )
}


export function MovieResults ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
}