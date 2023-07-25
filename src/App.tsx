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

    /* GUARD CLAUSE PREVENTS RENDERING OUT GAME UI IF GAME ISN'T READY */
    if (!game) {
        return;
    }

    /* RENDERING OUT GAME UI IF THE GAME IS READY */
    return (
        game && (
            <main className="flex flex-col items-center justify-center w-full h-screen gap-4 p-8 bg-brilliant-azure ">
                <button
                    onClick={() => {
                        Rune.actions.checkPlayerPoses();
                        Rune.actions.updateCardStack();
                    }}
                    className="absolute w-4 bg-green-500 aspect-square"
                ></button>
                <Timer game={game} />
                <Stage />
                <DanceFloor>
                    {game.newGame.players.map((player: Player) => (
                        <Character
                            key={player.playerId}
                            player={player}
                        />
                    ))}
                </DanceFloor>
                <Controls />
            </main>
        )
    );
}

export default App;
