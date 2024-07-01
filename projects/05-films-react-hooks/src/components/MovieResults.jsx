import { MoviePanel } from "./MoviePanel"

function ListOfMovies({movies}) {
    return (
        <ul className='movies'>{
          movies.map( movie =>
          <li className = 'movie' key={movie.id}>
          <MoviePanel movieInfo={movie}/>
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