"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organization_1 = require("./../controller/organization");
const router = (0, express_1.Router)();
router.get('/', organization_1.organizations);
exports.default = router;
