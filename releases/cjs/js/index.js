"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
var notes_1 = require("./notes");
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
        if (note in notes_1.NOTES)
            return notes_1.NOTES[note];
        throw new Error(note + " is not a valid note");
    };
    /**
     * Plays a series of notes in an `IMeasure`. If an array of `IMeasure`s is given then
     * each `IMeasure will play when the previous one completes. Resolves when all sound has stopped.
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
exports.default = Xylophone;
