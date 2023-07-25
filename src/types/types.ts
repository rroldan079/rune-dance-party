// export type Limb = "left arm" | "right arm" | "left leg" | "right leg";
export enum LimbEnum {
    LeftArm,
    RightArm,
    LeftLeg,
    RightLeg,
}

export enum LimbPose {
    Straight = 1,
    BentUp = 2,
    BentDown = 3,
}

export type Player = {
    id: string;
    name: string;
    score: number;
};

export type Card = {
    color: string;
    limbs: LimbEnum[];
};

export interface GameState {
    count: number;
    currentPlayerIndex?: number;
    remainingTime?: number;
    cardStack: Card[];
    winner?: string | null;
    players: any;
}

export type GameActions = {
    updateCardStack: (params: { game: GameState }) => void;
    toggleLimb: (params: { limb: LimbEnum }) => void;
};
