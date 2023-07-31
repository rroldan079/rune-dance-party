import { LimbEnum } from "../types/types";
import interfaceClick from "../assets/interface click.wav"

export const Controls = () => {
    const onClickHandler = (limb: LimbEnum) => {
        // does this activate when anyone clicks their buttons or only when player clicks their own
        new Audio(interfaceClick).play()
        /* TELLS SERVER TO UPDATE THE LIMB POSE FOR THE ACTIVATING PLAYER - SEE ACTIONS IN LOGIC.TS */
        Rune.actions.toggleLimb({
            limb: limb,
        });
    };

    /* RENDERING OUT ONE BUTTON PER LIMB */
    return (
        <div className="flex w-full h-32 bg-black border-8 border-black rounded-3xl overflow-clip ">
            <button
                className="w-full h-full text-xs font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-ronchi"
                onClick={() => onClickHandler(LimbEnum.LeftArm)}
            >
                Left Arm
            </button>
            <button
                className="w-full h-full text-xs font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-willpower-orange"
                onClick={() => onClickHandler(LimbEnum.RightArm)}
            >
                Right Arm
            </button>
            <button
                className="w-full h-full text-xs font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-vivid-raspberry"
                onClick={() => onClickHandler(LimbEnum.LeftLeg)}
            >
                Left Leg
            </button>
            <button
                className="w-full h-full text-xs font-black transition-all rounded-none hover:opacity-90 bg-black/20 bg-blue-purple"
                onClick={() => onClickHandler(LimbEnum.RightLeg)}
            >
                Right Leg
            </button>
        </div>
    );
};
