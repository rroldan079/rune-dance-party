import type { RuneClient } from "rune-games-sdk/multiplayer";

declare global {
    const Rune: RuneClient<GameState, GameActions>;
}
export interface GameState {
    count: number;
    currentPlayerIndex?: number;
    timeElapsed?: number;
    cardStack: any;
    winner?: string | null;
    players: any;
}

export interface Player {
    id: string;
    name: string;
    score: number;
}

type GameActions = {
    increment: (params: { amount: number }) => void;
    checkPoses: (params: { playerPoses: [] }) => void;
    updateCardStack: (params: { game: GameState }) => void;
    setActiveCard: (params: { game: GameState }) => void;
    toggleLimb: (params: { limb: "left arm" | "right arm" | "left leg" | "right leg" }) => void;
};

export function getCount(game: GameState) {
    return game.count;
}

export const generateCardStack = () => {
    const colors = ["red", "green", "yellow", "blue"];
    const stack = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        stack.push(colors[randomIndex]);
    }
    return stack;
};

Rune.initLogic({
    minPlayers: 4,
    maxPlayers: 4,
    setup: (playerIds): GameState => {
        return {
            count: 0,
            currentPlayerIndex: 0,
            timeElapsed: 0,
            cardStack: generateCardStack(),
            winner: null,
            players: playerIds.reduce(
                (acc, playerId, index) => ({
                    ...acc,
                    [playerId]: {
                        id: playerId,
                        limbs: { "left arm": 1, "right arm": 1, "left leg": 1, "right leg": 1 },
                        score: 0,
                        displayName: `Player ${index + 1}`,
                    },
                }),
                {}
            ),
        };
    },
    actions: {
        /* AS A SECOND ARGUMENT, EACH ACTION GETS ACCESS TO AN OBJECT CONTAINING THE CURRENT GAME STATE, THE PLAYER ID OF THE PLAYER INITIATING THE ACTION, AND AN ARRAY OF ALL PLAYER IDS */
        increment: ({ amount }, { game }) => {
            game.count += amount;
        },
        checkPoses: ({ playerPoses }, { game }) => {
            // Check if player poses are correct
        },
        updateCardStack: ({ game }) => {
            game.cardStack = game.cardStack.shift(); /* A function for removing the topmost card from the stack */
        },
        setActiveCard: ({ game }) => {
            // Set the active card
        },
        toggleLimb: ({ limb }, { game, playerId: initiatingPlayerId }) => {
            /* THIS ACTION TAKES A PAYLOAD OBJECT WITH THE LIMB TO BE TOGGLED. EACH LIMB HAS THREE STATES TO TOGGLE BETWEEN */
            const currentPose = game.players[initiatingPlayerId].limbs[limb];
            const newPose = (currentPose % 3) + 1;
            game.players[initiatingPlayerId].limbs[limb] = newPose;
        },
    },
    events: {
        playerJoined: () => {
            // Handle player joined
        },
        playerLeft() {
            // Handle player left
        },
    },
    // update: ({ game }) => {
    //     game.timeElapsed = Rune.gameTimeInSeconds();
    //     /* Any code inside this function will run every 1 second and return to client */
    // },
});