import { Stage } from "./components/Stage";
import { Character } from "./components/Character.tsx";
import { DanceFloor } from "./components/DanceFloor.tsx";
import { Controls } from "./components/Controls.tsx";
import { useGame } from "./hooks/useGame.ts";

function App() {
    /* This is the current game state, can be passed as a prop to components if you want to get the most recent, synced, server-side game state*/
    const game = useGame();

    if (!game) {
        return <div>Loading...</div>;
    }

    const playersArray = Object.values(game.newGame.players); /* CONVERTING PLAYERS OBJECT TO ITERABLE ARRAY */

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen gap-4 p-8 bg-brilliant-azure ">
            <Stage />
            <DanceFloor>
                {playersArray.map((player: any) => (
                    <Character
                        key={player.id}
                        player={player}
                    />
                ))}
            </DanceFloor>
            <Controls />
        </main>
    );
}

export default App;
