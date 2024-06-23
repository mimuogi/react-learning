import { Square } from './Square.jsx'; 

export function ModalWinner({ winner, resetGame }) { // Destructure props
  if (winner === null) return null;

  const winnerText = winner === false ? 'Tie' : 'The winner is ';

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  );
}




