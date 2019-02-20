/**
 * A measure that can be played on a Xylophone
 */
export interface IMeasure {
    notes: string[];
    length?: number;
    offset?: number;
    type?: OscillatorOptions['type'];
}
export interface INote {
    note: string;
    length?: number;
    offset?: number;
    type?: OscillatorOptions['type'];
}
/**
 * Creates a Xylophone
 */
export default class Xylophone {
    /**
     * Returns the AudioContext that's used under the hood
     */
    readonly audioContext: AudioContext;
    /**
     * Converts a named note to hertz (e.g. `toHertz('A4') => 440.00`)
     */
    private static toHertz;
    private oscillator;
    private gainNode;
    private context;
    /**
     * Plays a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure` will play when the previous one completes. Resolves when all sound has stopped.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     */
    play(measure: IMeasure | IMeasure[]): Promise<void>;
    /**
     * Loops a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure will play when the previous one completes.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     * @returns {function} Stops the loop when called
     */
    loop(measure: IMeasure | IMeasure[]): Promise<() => void>;
    /**
     * Plays an `INote`
     * @param note The tone to play
     */
    private playTone;
}
