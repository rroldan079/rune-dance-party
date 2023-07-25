import React, { useMemo, useState, useEffect } from "react";
import "./Stage.css";
import { StageCard } from "./StageCard";

export const Stage: React.FC = () => {
    ////////////////////// TODO: Integrate game logic with useGame hook /////////////////////////
    // the dance move picking logic should probably be somewhere else;
    // this placeholder makes different cards for each player with Rune
    const [stageCards, setStageCards] = useState<string[]>([]);
    const [activeCard, setActiveCard] = useState<string>();
    const possibleColors: string[] = useMemo(() => ["red", "yellow", "lime", "blue", "purple", "magenta", "white"], []);

    useEffect(() => {
        const newCards: string[] = [];
        for (let i = 0; i < 10; i++) {
            newCards.push(possibleColors[Math.floor(Math.random() * possibleColors.length)]);
        }
        setStageCards(newCards);
    }, []);
    ////////////////////// TODO: Integrate game logic with useGame hook^^^ /////////////////////////

    const turnCard = () => {
        if (stageCards.length > 0) {
            console.log("turning card: " + stageCards[0]);
            setActiveCard(stageCards[0]);
            setStageCards((prevCards) => prevCards.slice(1));
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
                {activeCard && <StageCard cardType={activeCard} />}
            </div>
            <div
                id="deck"
                className="relative flex"
                onClick={() => {
                    turnCard();
                }}
            >
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
    );
};
