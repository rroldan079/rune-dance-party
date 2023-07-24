import { useEffect, useState } from "react";
import { GameState } from "../logic.ts";

// Custom hook to get game state
export const useGame = (): GameState => {
    // State variable for game data
    const [data, setData] = useState<any>();

    // Initialize Rune client on component mount
    useEffect(() => {
        Rune.initClient({
            // Update data state on game state change
            onChange: (data) => {
                setData(data);
            },
        });
    }, []); // Run once on mount

    // Return current game state
    return data;
};
