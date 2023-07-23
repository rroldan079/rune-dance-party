import React, { useMemo, useState, useEffect } from "react";
import "./Stage.css";
import { StageCard } from "./StageCard";

export const Stage: React.FC = () => {
  ////////////////////// MOVE THIS ELSEWHERE
  // the dance move picking logic should probably be somewhere else;
  // this placeholder makes different cards for each player with Rune
  const [stageCards, setStageCards] = useState<string[]>([]);
  const possibleColors: string[] = useMemo(
    () => ["red", "yellow", "lime", "blue", "purple", "magenta", "white"],
    []
  );

  useEffect(() => {
    let newCards: string[] = [];
    for (let i = 0; i < 10; i++) {
      newCards.push(
        possibleColors[Math.floor(Math.random() * possibleColors.length)]
      );
    }
    setStageCards(newCards);
  }, []);
  ////////////////////// MOVE THIS ELSEWHERE ^^^

  return (
    <>
      <div
        id="stage"
        className="flex absolute p-2 bg-orange-600 w-screen rounded-b-lg"
      >
        <div
          id="active-card"
          className="mr-2 w-10 h-14 border-2 border-black border-dashed rounded-md"
        ></div>
        <div id="deck" className="flex relative">
          {stageCards.map((item, i) => (
            <div key={`stage-cards-${i}`}>
              <StageCard
                cardType={item}
                leftOffset={`${i * 10 + 2}px`}
                z={`${stageCards.length - i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
