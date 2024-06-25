/* eslint-disable react/prop-types */
export function MoviePanel ({movieInfo}) {
  
  return (
        <li key={movieInfo.id}>
          <h3>{movieInfo.title}</h3>
          <p>{movieInfo.year}</p>
          <img src={movieInfo.poster} alt={movieInfo.title} />
        </li>
  )
}