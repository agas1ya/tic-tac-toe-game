import { useState } from 'react'; // imports useState library from react

type SquareValue = 'X' | 'O' | null; // Imports Square Value's types
type BoardSquares = SquareValue[]; // Defines a new varible as SquareValue[]

interface SquareProps { // Defines the props for the Square Value component. 
  value: SquareValue;
  onSquareClick: () => void;
}

interface BoardProps { // Defines the props for the Board component. 
  xIsNext: boolean;
  squares: BoardSquares;
  onPlay: (nextSquares: BoardSquares) => void;
}

function Square({ value, onSquareClick }: SquareProps) { // Creates a button for our squares
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: BoardProps) { 
  // This function handles what happens when a square is clicked
  function handleClick(i: number): void {
    // If there's already a winner or the square is filled, do nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Create a copy of the current squares array
    const nextSquares = squares.slice();
    // Set the clicked square to 'X' or 'O' based on whose turn it is
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    // Call the onPlay function to update the board state
    onPlay(nextSquares);
  }

  // Calculate if there's a winner based on the current board state
  const winner = calculateWinner(squares);

  // Define the status message to show the winner or the next player
  let status: string;
  if (winner) {
    status = 'Winner: ' + winner; // Show the winner if there is one
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // Show whose turn it is
  }

  // Render the board and the status message
  return (
    <>
      {/* Display the status message */}
      <div className="status">{status}</div>
      {/* Render the first row of squares */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      {/* Render the second row of squares */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      {/* Render the third row of squares */}
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  // State to keep track of the history of board states
  const [history, setHistory] = useState<BoardSquares[]>([Array(9).fill(null)]);
  // State to keep track of the current move number
  const [currentMove, setCurrentMove] = useState<number>(0);
  // Determine if 'X' is the next player based on the move number
  const xIsNext = currentMove % 2 === 0;
  // Get the current board state from the history
  const currentSquares = history[currentMove];

  // Function to handle a new move
  function handlePlay(nextSquares: BoardSquares): void {
    // Create a new history up to the current move and add the new board state
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // Update the history state
    setCurrentMove(nextHistory.length - 1); // Update the current move to the latest
  }

  // Function to jump to a specific move in the history
  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove); // Update the current move state
  }

  // Map over the history to create a list of move buttons
  const moves = history.map((squares: BoardSquares, move: number) => {
    let description: string;
    if (move > 0) {
      description = 'Go to move #' + move; // Label for a specific move
    } else {
      description = 'Go to game start'; // Label for the start of the game
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // Render the game board and move history
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: BoardSquares): SquareValue {
  // Define all possible winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Loop through each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Get the indices of the winning line
    // Check if all squares in the line have the same non-null value
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }
  return null; // Return null if there's no winner
}