"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperty = exports.catchAsync = exports.jsonResponse = void 0;
require("dotenv/config");
const DB_PATH = process.env.DB_PATH || 'mongodb://localhost:27017/sms';
const mongoose_1 = __importDefault(require("mongoose"));
const Logger_1 = __importDefault(require("./Logger"));
const jsonResponse = (res, code, data) => {
    res.status(code).json({
        status: 'success',
        data
    });
};
exports.jsonResponse = jsonResponse;
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.catchAsync = catchAsync;
const connectDb = (DB_URL) => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.default.connect(DB_URL); });
exports.default = (app, PORT, DB_URL = DB_PATH) => {
    app.listen(PORT, () => {
        Logger_1.default.log(`app started @ ${PORT}`, 'Connecting to database ...');
        connectDb(DB_URL)
            .then((res) => Logger_1.default.log('DB Connection success'))
            .catch((err) => Logger_1.default.log('DB Connection failed', err));
    });
};
const getProperty = (property, arr) => {
    return arr.map((a) => a[property]);
};
exports.getProperty = getProperty;
