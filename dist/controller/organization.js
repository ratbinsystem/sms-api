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
exports.organizations = void 0;
const OrganisationModel_1 = __importDefault(require("../model/OrganisationModel"));
const common_1 = require("../utility/common");
class Organisation {
    organisations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield OrganisationModel_1.default.find({});
        });
    }
}
const newOrganisation = new Organisation();
exports.organizations = (0, common_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield newOrganisation.organisations());
}));
