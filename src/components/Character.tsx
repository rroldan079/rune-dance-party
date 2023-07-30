import React from "react";
import { LimbEnum, CharacterProps, BodyProps, LimbProps } from "../types/types";
import "../index.css";

const Limb: React.FC<LimbProps> = ({ limb, player }) => {
    let position;

    switch (limb) {
        case LimbEnum.LeftArm:
            position = "left-0 top-0";
            break;
        case LimbEnum.RightArm:
            position = "right-0 top-0";
            break;
        case LimbEnum.LeftLeg:
            position = "left-0 bottom-0";
            break;
        case LimbEnum.RightLeg:
            position = "right-0 bottom-0";
            break;
        default:
            position = "left-0 top-0";
            break;
    }
    return <div className={`absolute font-black text-xs ${position}`}>{player.limbs[limb]}</div>;
};

const Body: React.FC<BodyProps> = ({ children, player }) => {
    return (
        <div className="relative flex items-center justify-center p-8 rounded-full bg-black/20">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { player: player });
                }
                return child;
            })}
        </div>
    );
};

export const Character: React.FC<CharacterProps> = ({ playerName, player }) => {
    return (
        <div className="relative flex flex-col items-center w-full p-4 bg-black/10 rounded-3xl aspect-square">
            <span>{playerName}</span>
            <span className="absolute top-0 right-0 font-black stroke-text">{player.score}</span>
            <Body player={player}>
                <Limb
                    limb={LimbEnum.LeftArm}
                    player={player}
                />
                <Limb
                    limb={LimbEnum.RightArm}
                    player={player}
                />
                <Limb
                    limb={LimbEnum.LeftLeg}
                    player={player}
                />
                <Limb
                    limb={LimbEnum.RightLeg}
                    player={player}
                />
            </Body>
        </div>
    );
};
