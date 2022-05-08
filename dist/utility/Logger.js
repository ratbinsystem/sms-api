"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DateTime_1 = __importDefault(require("./DateTime"));
const FileIo_1 = __importDefault(require("./FileIo"));
class Logger {
    constructor() {
        this.log = (...logStr) => {
            console.log(...logStr);
        };
        this.requestLogger = (req, res, next) => {
            const url = req.url;
            const method = req.method;
            const time = new DateTime_1.default(new Date()).currentTime({
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });
            this.log(time, url, method);
            FileIo_1.default.writeLogToFile(`${time}, ${url}, ${method}`, next);
            next();
        };
    }
}
exports.default = new Logger();
