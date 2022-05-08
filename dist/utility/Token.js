"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Token {
    constructor() {
        this.createToken = () => {
            return crypto_1.default.randomBytes(32).toString('hex');
        };
        this.hashToken = (key) => {
            const hashedToken = crypto_1.default.createHash('sha256').update(key).digest('hex');
            return hashedToken;
        };
    }
}
exports.default = new Token();
