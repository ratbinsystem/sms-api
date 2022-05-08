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
exports.getModels = exports.dbSeed = exports.organisationFactory = void 0;
const faker_1 = require("@faker-js/faker");
const express_1 = __importDefault(require("express"));
const OrganisationModel_1 = __importDefault(require("../model/OrganisationModel"));
const common_1 = __importDefault(require("./../utility/common"));
const Logger_1 = __importDefault(require("./Logger"));
const app = (0, express_1.default)();
const PORT = process.env.SEED_PORT || 1995;
const organisationFactory = () => ({
    name: `${faker_1.faker.name.firstName} ${faker_1.faker.name.lastName}`,
    estd: faker_1.faker.date.past(),
    registration_number: faker_1.faker.random.alphaNumeric(10),
    affliation_number: faker_1.faker.random.alphaNumeric(10),
    description: faker_1.faker.lorem.paragraph()
});
exports.organisationFactory = organisationFactory;
const dbSeed = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, common_1.default)(app, PORT);
    Logger_1.default.log('Seeding Started');
    const organisation_data = yield (0, exports.getModels)(exports.organisationFactory, 20);
    OrganisationModel_1.default.insertMany(organisation_data);
    Logger_1.default.log('Seeding Cmpleted');
    process.exit();
});
exports.dbSeed = dbSeed;
const getModels = (fn, numberOfModel) => __awaiter(void 0, void 0, void 0, function* () {
    let data = [];
    for (let index = 0; index < numberOfModel; index++) {
        const newData = yield fn();
        data = [...data, newData];
    }
    return data;
});
exports.getModels = getModels;
(0, exports.dbSeed)();
