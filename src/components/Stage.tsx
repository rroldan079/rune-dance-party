import React, { useState, useEffect } from "react";
import { StageCard } from "./StageCard";
import { StageProps, Card } from "../types/types";
import { RoundTimer } from "./RoundTimer";

export const Stage: React.FC<StageProps> = ({ game }) => {
  // TODO: Check the player poses when the card reaches its final form
  // look into Intersection Observer API (tracks where an object is on the screen)
  const [stageCards, setStageCards] = useState<Card[]>(game.newGame.cardStack);
  const [roundTimeUp, setRoundTimeUp] = useState<boolean>(false)
  const [activeCard, setActiveCard] = useState<Card>();

  useEffect(() => {
    console.log(game);
  }, []);

  const turnCard = () => {
    if (stageCards.length > 0) {
      console.log("turning card: " + game.newGame.cardStack[0].color);
      Rune.actions.updateCardStack();
      setActiveCard(game.newGame.cardStack[0]);
      // console.log(game)
    }
  };

  useEffect(() => {
    if (roundTimeUp === true) {
        turnCard()
        console.log("trying to flip card")
        // setRoundTimeUp(false)
    }
  },[roundTimeUp])

  return (
    <div
      id="stage"
      className="flex flex-col w-full pt-4 px-4 bg-orange-500 border-4 border-orange-700 border-solid rounded-xl h-fit"
    >
      <div id="cards" className="flex">
        <div
          id="active-card"
          className={`mr-14 w-10 h-14 ${
            activeCard || "border-4 border-white border-dashed rounded-xl"
          }`}
          style={{ width: "20vw", height: "25vw" }}
        >
          {activeCard ? (
            <StageCard active={true} color={activeCard.color} limbs={activeCard.limbs} />
          ) : (
            <> </>
          )}
        </div>
        <div
          id="deck"
          className="relative flex" // ... like me
          onClick={() => {
            turnCard();
          }}
        >
          {game.newGame.cardStack.map((cardItem: Card, i: number) => (
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
        <RoundTimer setRoundTimeUp={setRoundTimeUp} />
      </div>
    </div>
  );
};
