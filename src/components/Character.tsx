import React from "react";

type CharacterProps = {
    player?: any;
};

type LimbProps = {
    type: "left arm" | "right arm" | "left leg" | "right leg";
};

const Limb: React.FC<LimbProps> = ({ type }) => {
    let position;
    switch (type) {
        case "left arm":
            position = "left-0 top-0";
            break;
        case "right arm":
            position = "right-0 top-0";
            break;
        case "left leg":
            position = "left-0 bottom-0";
            break;
        case "right leg":
            position = "right-0 bottom-0";
            break;
        default:
            position = "left-0 top-0";
            break;
    }
    return <div className={`absolute font-black ${position}`}>{type}</div>;
};

type BodyProps = {
    children: React.ReactNode;
    player: any;
};

const Body: React.FC<BodyProps> = ({ children, player }) => {
    return (
        <div className="relative flex items-center justify-center bg-black/20">
            <img
                src={player.avatarUrl}
                className="w-full"
            />
            {children}
        </div>
    );
};

export const Character: React.FC<CharacterProps> = ({ player }) => {
    return (
        <div className="w-full p-4 bg-black/10 rounded-3xl aspect-square">
            <p>{player.displayName}</p>
            <Body player={player}>
                <Limb type="left arm" />
                <Limb type="right arm" />
                <Limb type="left leg" />
                <Limb type="right leg" />
            </Body>
        </div>
    );
};
