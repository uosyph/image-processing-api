"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./api/resize"));
const preview_1 = __importDefault(require("./api/preview"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('API Route');
});
routes.use('/resize', resize_1.default);
routes.use('/preview', preview_1.default);
exports.default = routes;
