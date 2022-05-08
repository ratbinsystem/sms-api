"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const DateTime_1 = __importDefault(require("./DateTime"));
class FileIo {
    constructor() {
        this.LOG_PATH = process.env.LOG_PATH || './log';
        this.currentDate = new DateTime_1.default(new Date).currentDate();
        this.defaultFilePath = () => path_1.default.join(path_1.default.resolve('./'), this.LOG_PATH, `${this.currentDate}.txt`);
    }
    writeLogToFile(logMessage, next, filePath = this.defaultFilePath()) {
        let fileName = filePath;
        (0, fs_1.appendFile)(fileName, `${logMessage}\n`, (err) => {
            if (err)
                next(err);
        });
    }
}
exports.default = new FileIo();
