import { useState } from "react";
import "./App.css";

export default function LotteryTicket() {
  const [num, setNum] = useState(0);
  const [isWinning, setWinning] = useState(false);

  const GetTicket = () => {
    const ticket = Math.floor(Math.random() * 900) + 100;
    setNum(ticket);

    let temp = ticket;
    let sum = 0;

    while (temp !== 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    setWinning(sum === 15);
  };

  return (
    <div className="game-container">
      <h1>Lottery Ticket Game</h1>
      <hr />

      {isWinning && (
        <h2 className="message">
          🎉 Congratulations! You Won 🎉
        </h2>
      )}

      <div className="ticket">{num}</div>

      <button className="btn" onClick={GetTicket}>
        Generate Ticket
      </button>
    </div>
  );
}