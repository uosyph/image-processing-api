"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const preview_1 = __importDefault(require("../../preview/preview"));
const previewOG_1 = __importDefault(require("../../preview/previewOG"));
const preview = express_1.default.Router();
let filename;
let height;
let width;
preview.get('/', (req, res) => {
    res.send('Preview Image');
    filename = String(req.query.filename);
    height = Number(req.query.height);
    width = Number(req.query.width);
    //check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        (0, preview_1.default)(filename, height, width);
    }
    else if (typeof filename === 'string' && isNaN(height) && isNaN(width)) {
        (0, previewOG_1.default)(filename);
    }
    else {
        console.log('Unvalid Parameters.. Check and Retry.\n', '(', filename, typeof filename, ') ', '(', height, typeof height, ') ', '(', width, typeof width, ')');
    }
});
exports.default = preview;
