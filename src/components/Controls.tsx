import React from "react";
import { GameState } from "../logic";

type ControlsProps = {
    game?: GameState; // Replace 'any' with the actual type of your game state
};

export const Controls: React.FC<ControlsProps> = ({ game }) => {
    return (
        // <div className="grid w-11/12 h-full grid-cols-2 gap-4 p-4 border-8 border-black rounded-3xl place-items-center">
        <div className="flex h-32 bg-black border-8 border-black rounded-3xl overflow-clip ">
            <button className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-ronchi">
                Left Arm
            </button>
            <button className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-willpower-orange">
                Right Arm
            </button>
            <button className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-vivid-raspberry">
                Left Leg
            </button>
            <button className="h-full font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-blue-purple">
                Right Leg
            </button>
        </div>
    );
};
