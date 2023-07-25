import { Card } from "../types/types";
import { LimbEnum } from "../types/types";

const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generateCardStack = (): Card[] => {
    const colors = ["red", "green", "yellow", "blue"];
    const stack: Card[] = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const limbs = Array(4)
            .fill(0)
            .map(() => getRandomNumber(1, 3));
        stack.push({ color: colors[randomIndex], limbs: limbs });
    }
    return stack;
};
