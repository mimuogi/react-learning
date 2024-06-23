/* eslint-disable react/prop-types */
import {useState } from 'react'
import './App.css'


const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({children, isSelected, updatedBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updatedBoard(index)
  }

  return (
    <div onClick = {handleClick} className = {className} >
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  // States
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null -> no winner yet, false -> draw

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const[a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a]=== boardToCheck[c]
      ) 
      {
        return boardToCheck[a]
      }
    }
    return null 

  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updatedBoard = (index) => {

    if(board[index] || winner) return

    // Se hace una copia porque es buena practica tratar las props y el estado como si fueran inmutables
    // Hacer directamente board[index] = turn; estaría MAL porque puede crear problemas en el renderizado por modificar el state    
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner)
    {
      //La actualización de estados es ASINCRONA, no bloquea el codigo siguiente
      setWinner(newWinner)
      // alert.("Winner is ${turn}")
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const checkEndGame = (newBoard) => {

    return newBoard.every((square) => square != null)
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
        <section className='game'>
          {board.map((square, index) => {
            return (
                <Square index={index} key = {index} updatedBoard={updatedBoard}>
                  {/* Se pasa la función y no la ejecución de la funcion (updateBoard()) porque si pasas la ejecución, la funcion se ejecuta cada vez que se renderiza el componente, y no solamente cuando se necesita (en el click)*/
                  }
                  
                  {square}
                </Square>
            )
          })}

        </section>

        <section className='turn'>
          <Square isSelected = {turn === TURNS.X}>
            {TURNS. X}  
          </Square>
          <Square isSelected = {turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>


        
        {winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Tie' : 'The winner is '
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>} 
              </header>

              <footer>
                <button onClick={resetGame}>Play again</button>
              </footer>

            </div>
          </section>)
          }  
        
      </main>
  )
}

export default App
