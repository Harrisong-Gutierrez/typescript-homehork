export namespace Utilities {
    export function clamp<T extends number>(value: T, min: T, max: T): T {
        return Math.min(Math.max(value as number, min as number), max as number) as T;
    }

    export function shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length;
        let temporaryValue: T;
        let randomIndex: number;


        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    export function calculateAverage<T extends number>(numbers: T[]): number {
        const sum = numbers.reduce((acc, curr) => acc + (curr as number), 0);
        return sum / numbers.length;
    }
}