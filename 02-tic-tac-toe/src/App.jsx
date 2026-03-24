import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
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

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div key={index} className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export function App() {
  const initialBoard = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    setTurn((currentTurn) => {
      return currentTurn === TURNS.X ? TURNS.O : TURNS.X
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner !== null) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (board[a] && board[b] === board[c] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  const checkEndGame = (board) => {
    return board.every((square) => square !== null)
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className='board'>
        <h1>Tic-Tac-Toe</h1>

        <section className='game'>
          {board.map((_, index) => {
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })}
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        { winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {winner === false ? 'Tie' : 'The winner is:'}
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Play Again</button>
              </footer>
            </div>
          </section>
        )}

        <button onClick={resetGame}>Restart</button>
      </main>
    </>
  )
}
