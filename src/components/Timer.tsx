import React from "react";

type TimerProps = {
    children?: React.ReactNode;
    game: any; // Replace 'any' with the actual type of your game state
};

export const Timer: React.FC<TimerProps> = ({ game }) => {
    return <div className="absolute p-4 text-4xl font-bold text-black top-4 right-4">{game.newGame.remainingTime}</div>;
};
