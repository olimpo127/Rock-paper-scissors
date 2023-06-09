import React, { useState } from "react";
import "./App.css"; 

const Game = () => {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [player1Move, setPlayer1Move] = useState("");
  const [player2Move, setPlayer2Move] = useState("");
  const [result, setResult] = useState("");
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  const handleMoveSelection = (player, move) => {
    if (player === "player1") {
      setPlayer1Move(move);
    } else if (player === "player2") {
      setPlayer2Move(move);
    }
  };

  const playGame = () => {

    if (player1Move === player2Move) {
      setResult("It's a tie!");
    } else if (
      (player1Move === "rock" && player2Move === "scissors") ||
      (player1Move === "paper" && player2Move === "rock") ||
      (player1Move === "scissors" && player2Move === "paper")
    ) {
      setResult(`Player 1 picked ${player1Move} and Player 2 picked ${player2Move}. Player 1 wins!`);
      setPlayer1Wins(player1Wins + 1);
    } else {
      setResult(`Player 1 picked ${player1Move} and Player 2 picked ${player2Move}. Player 2 wins!`);
      setPlayer2Wins(player2Wins + 1);
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Rock-Paper-Scissors Game</h2>
      <div className="players-container">
        <div className="player-container">
          <h3>{player1Name}</h3>
          <input
            type="text"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <div className="move-buttons">
            <button onClick={() => handleMoveSelection("player1", "rock")}>
              Rock
            </button>
            <button onClick={() => handleMoveSelection("player1", "paper")}>
              Paper
            </button>
            <button onClick={() => handleMoveSelection("player1", "scissors")}>
              Scissors
            </button>
          </div>
          <p>Games won: {player1Wins}</p>
        </div>
        <div className="player-container">
          <h3>{player2Name}</h3>
          <input
            type="text"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <div className="move-buttons">
            <button onClick={() => handleMoveSelection("player2", "rock")}>
              Rock
            </button>
            <button onClick={() => handleMoveSelection("player2", "paper")}>
              Paper
            </button>
            <button onClick={() => handleMoveSelection("player2", "scissors")}>
              Scissors
            </button>
          </div>
          <p>Games won: {player2Wins}</p>
        </div>
      </div>
      <button className="play-button" onClick={playGame}>
        Play
      </button>
      <h3 className="result">{result}</h3>
    </div>
  );
};

export default Game;
