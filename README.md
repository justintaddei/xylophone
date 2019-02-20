# Xylophone

![npm](https://img.shields.io/npm/v/xylophone.svg)
![npm](https://img.shields.io/npm/dt/xylophone.svg)
![](https://img.shields.io/badge/status-awesome-red.svg?style=flat)

Simple library for creating tones using the WebAudioAPI

## Installation

```bash
npm install xylophone --save
```

or

Download <a download href="https://raw.githubusercontent.com/justintaddei/xylophone/master/releases/iife/xylophone.js">xylophone.js</a> from `master` and include it in your project

```html
<script src="./path/to/xylophone.js"></script>
```

## Example

```typescript
import Xylophone from 'xylophone'

const xylophone = new Xylophone()

// Play one measure
await xylophone.play({
  notes: ['C4', 'E4', 'C4', 'E4'],
  length: 0.5,
  offset: 0.25
})

// Play an array of measures
await xylophone.play([
  {
    notes: ['C4', 'E4', 'C4', 'E4'],
    length: 0.5,
    offset: 0.25
  },
  {
    notes: ['C4', 'G4', 'A3'],
    length: 0.3,
    offset: 0.25
  },
  {
    notes: ['C4', 'B3', 'Bb3', 'A#3', 'A3'],
    length: 0.5,
    offset: 0.25
  }
])

// Create a loop
const cancel = await xylophone.loop([
  {
    notes: ['C4', 'E4', 'C4', 'E4'],
    length: 0.5,
    offset: 0.25,
    type: 'square'
  },
  {
    notes: ['C4', 'G4', 'A3'],
    length: 0.3,
    offset: 0.25,
    type: 'triangle'
  },
  {
    notes: ['C4', 'B3', 'Bb3', 'A#3', 'A3'],
    length: 0.5,
    offset: 0.25,
    type: 'sawtooth'
  }
])

// Stop the loop in 20 seconds
setTimeout(cancel, 20000)
```

## Usage

### `interface IMeasure`

```typescript
notes: string[] // 'C0' through 'C8' on the equal tempered scale
length?: number // The length of each note
offset?: number // The offset between notes (e.i. `offset: 0` would play all the notes at the same time)
type?: "sine" | "square" | "sawtooth" | "triangle"
```

[equal tempered scale?](https://en.wikipedia.org/wiki/Equal_temperament)

### `Xylophone.prototype.play(measure: IMeasure | IMeasure[]): Promise<void>`

Plays a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then each `IMeasure` will play when the previous one ends.

- Resolves when all sound has stopped.

### `Xylophone.prototype.loop(measure: IMeasure | IMeasure[]): Promise<() => void)>`

Plays `measure` in a loop until canceled.

- `returns` `cancel() => void` Canceles the loop when called

## Support

Xylophone supports any browser with `AudioContext` or `webkitAudioContext` support  
See [caniuse.com](https://caniuse.com/#feat=audio-api) for details

## License

MIT
