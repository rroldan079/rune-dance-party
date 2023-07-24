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
            <div>
                <a
                    href="https://vitejs.dev"
                    target="_blank"
                >
                    <img
                        src={viteLogo}
                        className="logo"
                        alt="Vite logo"
                    />
                </a>
                <a
                    href="https://developers.rune.ai"
                    target="_blank"
                >
                    <img
                        src={reactLogo}
                        className="logo rune"
                        alt="Rune logo"
                    />
                </a>
            </div>
            <h1>Vite + Rune</h1>
            <div className="card">
                <button onClick={() => Rune.actions.increment({ amount: 1 })}>count is {game.count}</button>
                <button onClick={() => Rune.actions.updateCardStack()}>increment</button>
                <p className="text-blue-700">
                    Edit <code>src/App.tsx</code> or <code>src/logic.ts</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and Rune logos to learn more</p>
        </>
    );
}

export default App;
