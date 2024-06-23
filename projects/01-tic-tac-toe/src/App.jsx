/* eslint-disable react/prop-types */
import {useState } from 'react'
import { TURNS } from './constants.js'
import { Square } from './components/Square.jsx'
import confetti from "canvas-confetti"
import { checkWinner, checkEndGame } from './logic/board.js'
import {ModalWinner} from './components/ModalWinner.jsx'
import './App.css'


function App() {
  // States
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // null -> no winner yet, false -> draw

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
      confetti()
      //La actualización de estados es ASINCRONA, no bloquea el codigo siguiente
      setWinner(newWinner)
      // alert.("Winner is ${turn}")
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
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

      <ModalWinner resetGame = {resetGame} winner= {winner}>

      </ModalWinner>
        
      </main>
  )
}

export default App
