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

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updatedBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
        <section className='game'>
          {board.map((_, index) => {
            return (
                <Square index={index} key = {index} updatedBoard={updatedBoard}>
                  {/* Se pasa la función y no la ejecución de la funcion (updateBoard()) porque si pasas la ejecución, la funcion se ejecuta cada vez que se renderiza el componente, y no solamente cuando se necesita (en el click)*/
                  }
                  
                  {board[index]}
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
      </main>
  )
}

export default App
