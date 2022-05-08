"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const organization_1 = __importDefault(require("./router/organization"));
require("dotenv/config");
const PORT = process.env.PORT || 3000;
const Logger_1 = __importDefault(require("./utility/Logger"));
const common_1 = __importDefault(require("./utility/common"));
const app = (0, express_1.default)();
app.use(Logger_1.default.requestLogger);
app.use('/organization', organization_1.default);
(0, common_1.default)(app, PORT);
