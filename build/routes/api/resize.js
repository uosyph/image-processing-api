"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.width = exports.height = exports.filename = void 0;
const express_1 = __importDefault(require("express"));
const resize = express_1.default.Router();
var filename;
exports.filename = filename;
var height;
exports.height = height;
var width;
exports.width = width;
resize.get('/', (req, res) => {
    res.send("localhost:3000/api/resize?filename=imagename&height=400&width=400");
    exports.filename = filename = req.query.filename;
    exports.height = height = req.query.height;
    exports.width = width = req.query.width;
});
exports.default = resize;
