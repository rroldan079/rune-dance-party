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
    players: Player[];
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

const initialState: GameState = {
    count: 0,
    currentPlayerIndex: 0,
    timeElapsed: 0,
    cardStack: generateCardStack(),
    winner: null,
    players: [
        {
            id: "1",
            name: "Player 1",
            score: 0,
        },
    ],
};

Rune.initLogic({
    minPlayers: 1,
    maxPlayers: 4,
    setup: (): GameState => {
        return initialState; /* This functions returns the initial game state */
    },
    actions: {
        increment: ({ amount }, { game }) => {
            game.count += amount;
        },
        checkPoses: ({ playerPoses }, { game }) => {
            console.log(playerPoses);
            // Check if player poses are correct
        },
        updateCardStack: ({ game }) => {
            game.cardStack = game.cardStack.shift(); /* A function for removing the topmost card from the stack */
        },
        setActiveCard: ({ game }) => {
            // Set the active card
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
