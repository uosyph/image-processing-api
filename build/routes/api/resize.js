"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.width = exports.height = exports.filename = void 0;
const express_1 = __importDefault(require("express"));
const imgResBefore_1 = __importDefault(require("../../validity/imgResBefore"));
const resize = express_1.default.Router();
let filename;
exports.filename = filename;
let height;
exports.height = height;
let width;
exports.width = width;
resize.get('/', (req, res) => {
    res.send('Resize Route. Example: localhost:3000/api/resize/?filename=<ImageName>&height=<height>&width=<width>');
    // take params from URL
    exports.filename = filename = String(req.query.filename);
    exports.height = height = Number(req.query.height);
    exports.width = width = Number(req.query.width);
    // check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        console.log('Valid Parameters. Processing...');
        // if params are correct check the image if resized before with same dimensions
        (0, imgResBefore_1.default)();
    }
    else {
        console.log('Unvalid Parameters.. Check and Retry.\n', '(', filename, typeof filename, ') ', '(', height, typeof height, ') ', '(', width, typeof width, ')');
    }
});
exports.default = resize;
