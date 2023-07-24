import React from "react";
import { GameState } from "../logic";

type ControlsProps = {
    game?: GameState; // Replace 'any' with the actual type of your game state
};

export const Controls: React.FC<ControlsProps> = ({ game }) => {
    const onClickHandler = (limb: any) => {
        Rune.actions.toggleLimb({
            limb: limb,
        });
    };

    return (
        <div className="flex h-32 bg-black border-8 border-black rounded-3xl overflow-clip ">
            <button
                className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-ronchi"
                onClick={() => onClickHandler("left arm")}
            >
                Left Arm
            </button>
            <button
                className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-willpower-orange"
                onClick={() => onClickHandler("right arm")}
            >
                Right Arm
            </button>
            <button
                className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-vivid-raspberry"
                onClick={() => onClickHandler("left leg")}
            >
                Left Leg
            </button>
            <button
                className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-blue-purple"
                onClick={() => onClickHandler("right leg")}
            >
                Right Leg
            </button>
        </div>
    );
};
