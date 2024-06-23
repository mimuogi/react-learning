/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { TURNS } from './constants.js';
import { Square } from './components/Square.jsx';
import confetti from "canvas-confetti";
import { checkWinner, checkEndGame } from './logic/board.js';
import { ModalWinner } from './components/ModalWinner.jsx';
import { saveGameToStorage, resetGameStorage } from './logic/storage.js';
import './App.css';

function App() {
  // States
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null); // null -> no winner yet, false -> draw

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    // Create a copy because it's good practice to treat props and state as immutable
    // Directly using board[index] = turn would be BAD because it might cause rendering issues due to state mutation
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      // State updates are ASYNCHRONOUS, so they don't block the following code
      setWinner(newWinner);
      // alert(`Winner is ${turn}`);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };


  useEffect(()=>{
    console.log("useEffect execution")
  }, [])

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((square, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

       <ModalWinner resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
