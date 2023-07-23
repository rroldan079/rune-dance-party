import { useEffect, useState } from "react";
// import reactLogo from "./assets/rune.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { GameState } from "./logic.ts";
import { Stage } from "./components/Stage.tsx";

function App() {
    const [game, setGame] = useState<GameState>();
    useEffect(() => {
        Rune.initClient({
            onChange: ({ newGame }) => {
                setGame(newGame);
            },
        });
    }, []);

    if (!game) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Stage />
        </>
    );
}

export default App;
