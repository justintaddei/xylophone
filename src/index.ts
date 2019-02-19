const NOTES: { [note: string]: number } = {
  C0: 16.35,
  // tslint:disable-next-line:object-literal-sort-keys
  'C#0': 17.32,
  Db0: 17.32,
  D0: 18.35,
  'D#0': 19.45,
  Eb0: 19.45,
  E0: 20.6,
  F0: 21.83,
  'F#0': 23.12,
  Gb0: 23.12,
  G0: 24.5,
  'G#0': 25.96,
  Ab0: 25.96,
  A0: 27.5,
  'A#0': 29.14,
  Bb0: 29.14,
  B0: 30.87,
  C1: 32.7,
  'C#1': 34.65,
  Db1: 34.65,
  D1: 36.71,
  'D#1': 38.89,
  Eb1: 38.89,
  E1: 41.2,
  F1: 43.65,
  'F#1': 46.25,
  Gb1: 46.25,
  G1: 49.0,
  'G#1': 51.91,
  Ab1: 51.91,
  A1: 55.0,
  'A#1': 58.27,
  Bb1: 58.27,
  B1: 61.74,
  C2: 65.41,
  'C#2': 69.3,
  Db2: 69.3,
  D2: 73.42,
  'D#2': 77.78,
  Eb2: 77.78,
  E2: 82.41,
  F2: 87.31,
  'F#2': 92.5,
  Gb2: 92.5,
  G2: 98.0,
  'G#2': 103.83,
  Ab2: 103.83,
  A2: 110.0,
  'A#2': 116.54,
  Bb2: 116.54,
  B2: 123.47,
  C3: 130.81,
  'C#3': 138.59,
  Db3: 138.59,
  D3: 146.83,
  'D#3': 155.56,
  Eb3: 155.56,
  E3: 164.81,
  F3: 174.61,
  'F#3': 185.0,
  Gb3: 185.0,
  G3: 196.0,
  'G#3': 207.65,
  Ab3: 207.65,
  A3: 220.0,
  'A#3': 233.08,
  Bb3: 233.08,
  B3: 246.94,
  C4: 261.63,
  'C#4': 277.18,
  Db4: 277.18,
  D4: 293.66,
  'D#4': 311.13,
  Eb4: 311.13,
  E4: 329.63,
  F4: 349.23,
  'F#4': 369.99,
  Gb4: 369.99,
  G4: 392.0,
  'G#4': 415.3,
  Ab4: 415.3,
  A4: 440.0,
  'A#4': 466.16,
  Bb4: 466.16,
  B4: 493.88,
  C5: 523.25,
  'C#5': 554.37,
  Db5: 554.37,
  D5: 587.33,
  'D#5': 622.25,
  Eb5: 622.25,
  E5: 659.26,
  F5: 698.46,
  'F#5': 739.99,
  Gb5: 739.99,
  G5: 783.99,
  'G#5': 830.61,
  Ab5: 830.61,
  A5: 880.0,
  'A#5': 932.33,
  Bb5: 932.33,
  B5: 987.77,
  C6: 1046.5,
  'C#6': 1108.73,
  Db6: 1108.73,
  D6: 1174.66,
  'D#6': 1244.51,
  Eb6: 1244.51,
  E6: 1318.51,
  F6: 1396.91,
  'F#6': 1479.98,
  Gb6: 1479.98,
  G6: 1567.98,
  'G#6': 1661.22,
  Ab6: 1661.22,
  A6: 1760.0,
  'A#6': 1864.66,
  Bb6: 1864.66,
  B6: 1975.53,
  C7: 2093.0,
  'C#7': 2217.46,
  Db7: 2217.46,
  D7: 2349.32,
  'D#7': 2489.02,
  Eb7: 2489.02,
  E7: 2637.02,
  F7: 2793.83,
  'F#7': 2959.96,
  Gb7: 2959.96,
  G7: 3135.96,
  'G#7': 3322.44,
  Ab7: 3322.44,
  A7: 3520.0,
  'A#7': 3729.31,
  Bb7: 3729.31,
  B7: 3951.07,
  C8: 4186.01
}

export class Xylophone {
  /**
   * Returns the AudioContext that's used under the hood
   */
  get audioContext() {
    return this.context
  }
  public static toHertz(note: string): number {
    note = note.trim().toUpperCase()
    if (note in NOTES) return NOTES[note]
    throw new Error(`${note} is not a valid note`)
  }

  private oscillator: OscillatorNode | undefined
  private gainNode: GainNode | undefined
  private context = new AudioContext()

  public play(note: string, fade: number = 1, offset: number = 0): Promise<Event | Event[]> {
    if (note.indexOf(',') !== -1) {
      return Promise.all(
        note.split(',').map((n, i) => {
          return this.play(n, fade, offset * i) as Promise<Event>
        })
      )
    }

    return new Promise(resolve => {
      offset = this.getOffset(offset)

      this.oscillator = this.context.createOscillator()
      this.gainNode = this.context.createGain()

      this.oscillator.connect(this.gainNode)
      this.gainNode.connect(this.context.destination)
      this.oscillator.type = 'sine'

      this.oscillator.frequency.value = Xylophone.toHertz(note)
      this.gainNode.gain.setValueAtTime(0, offset)
      this.gainNode.gain.linearRampToValueAtTime(1, offset + 0.01)

      this.oscillator.start(offset)
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, offset + fade)
      this.oscillator.stop(offset + fade)

      this.oscillator.onended = resolve
    })
  }

  private getOffset(offset: number): number {
    return this.context.currentTime + offset
  }
}
