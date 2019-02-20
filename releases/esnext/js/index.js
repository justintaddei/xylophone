import { NOTES } from './notes';
/**
 * Creates a Xylophone
 */
export default class Xylophone {
    constructor() {
        // @ts-ignore
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
    /**
     * Returns the AudioContext that's used under the hood
     */
    get audioContext() {
        return this.context;
    }
    /**
     * Converts a named note to hertz (e.g. `toHertz('A4') => 440.00`)
     */
    static toHertz(note) {
        note = note.trim();
        if (note in NOTES)
            return NOTES[note];
        throw new Error(`${note} is not a valid note`);
    }
    /**
     * Plays a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure` will play when the previous one completes. Resolves when all sound has stopped.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     */
    async play(measure) {
        if (measure instanceof Array) {
            const arr = [];
            for (const m of measure)
                arr.push(await this.play(m));
            return;
        }
        let i = 0;
        await Promise.all(measure.notes.map(note => {
            let offset;
            if (measure.offset)
                offset = measure.offset * i++;
            return this.playTone({
                length: measure.length,
                note,
                offset,
                type: measure.type
            });
        }));
        return;
    }
    /**
     * Loops a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure will play when the previous one completes.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     * @returns {function} Stops the loop when called
     */
    loop(measure) {
        return new Promise(resolve => {
            let canceled = false;
            resolve(() => (canceled = true));
            const loop = async () => {
                if (canceled)
                    return;
                await this.play(measure);
                loop();
            };
            loop();
        });
    }
    /**
     * Plays an `INote`
     * @param note The tone to play
     */
    playTone({ note, length = 1, offset = 1, type = 'sine' }) {
        return new Promise(resolve => {
            offset = this.context.currentTime + offset;
            this.oscillator = this.context.createOscillator();
            this.gainNode = this.context.createGain();
            this.oscillator.connect(this.gainNode);
            this.gainNode.connect(this.context.destination);
            this.oscillator.type = type;
            this.oscillator.frequency.value = Xylophone.toHertz(note);
            this.gainNode.gain.setValueAtTime(0, offset);
            this.gainNode.gain.linearRampToValueAtTime(1, offset + 0.01);
            this.oscillator.start(offset);
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, offset + length);
            this.oscillator.stop(offset + length);
            this.oscillator.onended = () => resolve();
        });
    }
}
