import React from "react";

type CharacterProps = {
    player?: any;
};

type LimbProps = {
    type: "left arm" | "right arm" | "left leg" | "right leg";
    limbPoses?: {
        leftArm: number;
        rightArm: number;
        leftLeg: number;
        rightLeg: number;
    };
    player?: any;
};

type BodyProps = {
    children: React.ReactElement<LimbProps>[] | React.ReactElement<LimbProps>;
    player: any;
};

const Limb: React.FC<LimbProps> = ({ type, player }) => {
    let position;
    console.log(player.limbs[type]);

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
    return <div className={`absolute font-black text-xs ${position}`}>{player.limbs[type]}</div>;
};

const Body: React.FC<BodyProps> = ({ children, player }) => {
    return (
        <div className="relative flex items-center justify-center p-8 bg-black/20 rounded-3xl">
            {/* <img
                src={player.avatarUrl}
                className="w-full"
            /> */}
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { player: player });
                }
                return child;
            })}
        </div>
    );
};

export const Character: React.FC<CharacterProps> = ({ player }) => {
    return (
        <div className="flex flex-col items-center w-full p-4 bg-black/10 rounded-3xl aspect-square">
            <span>{player.displayName}</span>

            <Body player={player}>
                <Limb type="left arm" />
                <Limb type="right arm" />
                <Limb type="left leg" />
                <Limb type="right leg" />
            </Body>
        </div>
    );
};
