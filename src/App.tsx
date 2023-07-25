import { Stage } from "./components/Stage";
import { Character } from "./components/Character.tsx";
import { DanceFloor } from "./components/DanceFloor.tsx";
import { Controls } from "./components/Controls.tsx";
import { useGame } from "./hooks/useGame.ts";
import type { Player } from "./types/types.ts";
import { Timer } from "./components/Timer.tsx";

function App() {
    /* THIS IS THE GAME DATA FROM SERVER. PASS THIS TO COMPONENTS THAT NEED GAME STATE DATA, ETC */
    const game = useGame();

    if (!game) {
        return <div>Loading...</div>;
    }

    console.log(game.newGame);
    /*  */
    const playersArray = Object.values(game.newGame.players);

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen gap-4 p-8 bg-brilliant-azure ">
            <Timer game={game} />
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
