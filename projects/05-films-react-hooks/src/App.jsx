import './App.css'
import { MovieResults } from './components/MovieResults'
import { useMovies } from './customHooks/useMovies'

// Crea una referencia mutable que persiste durante todo el ciclo de vida del componente.
// Cuando el valor de useRef cambia, no se reenderiza todo el componente otra vez, con useState si se vuelve a renderizar todo
//import { useRef } from 'react' 


function App() {

  const {movies: mappedMovies }= useMovies()


  return (
      <div className='page'>
      <header>
      <h1>Films API</h1>
      <form className='form'>
        <div>
          <label>
            Write your movie here:
          </label>
          <input 
            name='queryAPI' 
            placeholder='Lord of the Rings...'>
          </input>
          </div>
          <button type= 'submit'> Search </button>
        </form>
      </header>
      <main>
        <h2>API Query Results</h2>
        { 
        <MovieResults movies={mappedMovies} />
        }
      </main>
      </div>
  )
}

export default App
