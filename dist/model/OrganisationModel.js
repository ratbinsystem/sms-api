"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Organisation = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Organization name is requires']
    },
    estd: Number,
    registration_number: String,
    affliation_number: String,
    // organization_type: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
    // contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'contact' }],
    // addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'address' }],
    // users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    description: String,
}, { timestamps: true });
exports.default = mongoose_1.default.model('organisation', Organisation);
