"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const problems_1 = require("./problems");
const router = (0, express_1.Router)();
exports.appRouter = router;
router.use('/problems', problems_1.problemRouter);
