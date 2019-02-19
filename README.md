# Xylophone

![npm](https://img.shields.io/npm/v/xylophone.svg)
![npm](https://img.shields.io/npm/dt/xylophone.svg)
![](https://img.shields.io/badge/status-awesome-red.svg?style=flat)

Simple library for creating tones using the WebAudioAPI

## Installation

```bash
npm install xylophone --save
```

## Usage

```typescript
const xylophone = new Xylophone()

await xylophone.play('G3, E3, C3', 0.5, 0.2)
xylophone.play('C4, E4, G4', 0.5, 0.2)
```

## License

MIT
