import React, { useState, useEffect } from "react";
// import "./Stage.css";
import { StageCard } from "./StageCard";
import { StageProps, Card } from "../types/types"

export const Stage: React.FC<StageProps> = ({ game }) => {
    // TODO: Check the player poses when the card reaches its final form
    // look into Intersection Observer API (tracks where an object is on the screen)
    const [stageCards, setStageCards] = useState<Card[]>(game.newGame.cardStack);
    const [activeCard, setActiveCard] = useState<Card>(game.newGame.cardStack[0]);

    useEffect(() => {
        console.log(game)
    }, []);

    const turnCard = () => {
        if (stageCards.length > 0) {
            console.log("turning card: " + game.newGame.cardStack[0].color);
            Rune.actions.updateCardStack()
            setActiveCard(game.newGame.cardStack[0])
            // console.log(game)
        }
    };

    return (
        <div
            id="stage"
            className="flex w-full p-2 bg-orange-600 rounded-b-lg h-fit"
        >
            <div
                id="active-card"
                className={`mr-2 w-10 h-14 ${activeCard || "border-2 border-black border-dashed rounded-md"}`}
            >
                {activeCard && <StageCard color={activeCard.color} />}
            </div>
            <div
                id="deck"
                className="relative flex" // ... like me
                onClick={() => {
                    turnCard();
                }}
            >
                {game.newGame.cardStack.slice(1).map((cardItem:Card, i:number) => (
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
    );
};
