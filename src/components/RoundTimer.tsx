import React, { useEffect, useState } from "react";
import { RoundTimerProps } from "../types/types";

export const RoundTimer: React.FC<RoundTimerProps> = ({
  game,
  scoreAndTurnCard,
  activeCardIndex
}) => {
  const INTERVAL = 6 // THIS IS THE AMOUNT OF TIME IN A ROUND, IN SECONDS
  const gameTimerProgress = (60 - game.newGame.remainingTime) % INTERVAL;
  const [progress, setProgress] = useState<number>(gameTimerProgress);

  useEffect(() => {
    // ENSURES THE ROUND TIMER STAYS IN SYNC WITH GAME TIMER
    setProgress(gameTimerProgress);

    // INCREMENT PROGRESS BAR EVERY SECOND
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % INTERVAL);
    }, 1000); // Increment progress every second

    return () => clearInterval(interval);
  }, [gameTimerProgress, progress]);

  useEffect(() => {
    // IF THE ROUND TIMER BAR IS STARTING OVER (and it's not just because the timer was at 0)
    // THEN SCORE & TURN THE NEXT CARD OVER
    if (progress === 0 && game.newGame.remainingTime < 59) {
      Rune.actions.checkPlayerPoses({ index: activeCardIndex });
      scoreAndTurnCard();
    }
  }, [progress]);

  return (
    <>
      <div className="w-full h-10 py-2">
        <div
          className="h-full bg-white transition-all rounded-xl"
          style={{ width: `${((progress % INTERVAL) / (INTERVAL-1)) * 100}%` }} // Calculate the width based on the progress
        />
      </div>
    </>
  );
};
