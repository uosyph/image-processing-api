"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize = express_1.default.Router();
resize.get('/', (req, res) => {
    res.send("localhost:3000/api/resize?filename=imagename&height=400&width=400");
    console.log(req.query.filename);
    console.log(req.query.height);
    console.log(req.query.width);
});
exports.default = resize;
