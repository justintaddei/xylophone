var Xylophone = (function () {
'use strict';

var NOTES = {
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
};

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Creates a Xylophone
 */
var Xylophone = /** @class */ (function () {
    function Xylophone() {
        // @ts-ignore
        this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
    Object.defineProperty(Xylophone.prototype, "audioContext", {
        /**
         * Returns the AudioContext that's used under the hood
         */
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Converts a named note to hertz (e.g. `toHertz('A4') => 440.00`)
     */
    Xylophone.toHertz = function (note) {
        note = note.trim();
        if (note in NOTES)
            return NOTES[note];
        throw new Error(note + " is not a valid note");
    };
    /**
     * Plays a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure` will play when the previous one completes. Resolves when all sound has stopped.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     */
    Xylophone.prototype.play = function (measure) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, _i, measure_1, m, _a, _b, i;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(measure instanceof Array)) return [3 /*break*/, 5];
                        arr = [];
                        _i = 0, measure_1 = measure;
                        _c.label = 1;
                    case 1:
                        if (!(_i < measure_1.length)) return [3 /*break*/, 4];
                        m = measure_1[_i];
                        _b = (_a = arr).push;
                        return [4 /*yield*/, this.play(m)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                    case 5:
                        i = 0;
                        return [4 /*yield*/, Promise.all(measure.notes.map(function (note) {
                                var offset;
                                if (measure.offset)
                                    offset = measure.offset * i++;
                                return _this.playTone({
                                    length: measure.length,
                                    note: note,
                                    offset: offset,
                                    type: measure.type
                                });
                            }))];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Loops a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure will play when the previous one completes.
     * @param measure The `IMeasure` or `IMeasure[]` to play
     * @returns {function} Stops the loop when called
     */
    Xylophone.prototype.loop = function (measure) {
        var _this = this;
        return new Promise(function (resolve) {
            var canceled = false;
            resolve(function () { return (canceled = true); });
            var loop = function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (canceled)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.play(measure)];
                        case 1:
                            _a.sent();
                            loop();
                            return [2 /*return*/];
                    }
                });
            }); };
            loop();
        });
    };
    /**
     * Plays an `INote`
     * @param note The tone to play
     */
    Xylophone.prototype.playTone = function (_a) {
        var _this = this;
        var note = _a.note, _b = _a.length, length = _b === void 0 ? 1 : _b, _c = _a.offset, offset = _c === void 0 ? 1 : _c, _d = _a.type, type = _d === void 0 ? 'sine' : _d;
        return new Promise(function (resolve) {
            offset = _this.context.currentTime + offset;
            _this.oscillator = _this.context.createOscillator();
            _this.gainNode = _this.context.createGain();
            _this.oscillator.connect(_this.gainNode);
            _this.gainNode.connect(_this.context.destination);
            _this.oscillator.type = type;
            _this.oscillator.frequency.value = Xylophone.toHertz(note);
            _this.gainNode.gain.setValueAtTime(0, offset);
            _this.gainNode.gain.linearRampToValueAtTime(1, offset + 0.01);
            _this.oscillator.start(offset);
            _this.gainNode.gain.exponentialRampToValueAtTime(0.001, offset + length);
            _this.oscillator.stop(offset + length);
            _this.oscillator.onended = function () { return resolve(); };
        });
    };
    return Xylophone;
}());

return Xylophone;

}());
