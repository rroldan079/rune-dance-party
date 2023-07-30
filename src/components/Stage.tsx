import React, { useState, useEffect } from "react";
import { StageCard } from "./StageCard";
import { StageProps, Card } from "../types/types";
import { RoundTimer } from "./RoundTimer";

export const Stage: React.FC<StageProps> = ({ game }) => {
  const [stageCards, setStageCards] = useState<Card[]>(
    game.newGame.cardStack.slice(1)
  );
  const [activeCard, setActiveCard] = useState<Card>(game.newGame.cardStack[0]);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const scoreAndTurnCard = () => {
    if (stageCards.length > 0) {
      // WHEN THE ROUND ENDS, SCORE THE PREVIOUS CARD'S POSES
      // Rune.actions.checkPlayerPoses({ index: activeCardIndex });
      // THEN TURN TO THE NEW CARD (this triggers the useEffect below)
      setActiveCardIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // TRIGGERED BY THE ACTIVE CARD INDEX CHANGING (skips initial render tho)
    if (activeCardIndex > 0) {
      setActiveCard(stageCards[0]);
      setStageCards((prev) => prev.slice(1));
      // console.log("after active card removed: " + stageCards.length);
    }
  }, [activeCardIndex]);

  return (
    <div
      id="stage"
      className="flex flex-col w-full pt-4 px-4 bg-orange-500 border-4 border-orange-700 border-solid rounded-xl h-fit"
    >
      <div id="cards" className="flex">
        <div
          id="active-card"
          className={`mr-10 w-10 h-14 ${
            activeCard || "border-4 border-white border-dashed rounded-xl"
          }`}
          style={{ width: "20vw", height: "25vw" }}
        >
          {activeCard ? (
            <StageCard
              active={true}
              color={activeCard.color}
              limbs={activeCard.limbs}
            />
          ) : (
            <> </>
          )}
        </div>
        <div
          id="deck"
          className="relative flex" // ... like me
        >
          {stageCards.map((cardItem: Card, i: number) => (
            <div key={`stage-cards-${i}`}>
              <StageCard
                color={cardItem.color}
                leftOffset={`${i * 10 + 2}px`}
                z={`${stageCards.length - i}`}
                limbs={cardItem.limbs}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="round-timer">
        <RoundTimer game={game} scoreAndTurnCard={scoreAndTurnCard} activeCardIndex={activeCardIndex} />
      </div>
    </div>
  );
};
