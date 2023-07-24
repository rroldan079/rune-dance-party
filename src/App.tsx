import reactLogo from "./assets/rune.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGame } from "../hooks/useGame.ts";

function App() {
    const game = useGame(); /* This is the current game state */

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
