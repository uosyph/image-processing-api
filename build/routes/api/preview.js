"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const preview = express_1.default.Router();
preview.get('/', (req, res) => {
    const filename = String(req.query.filename);
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    //check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        res.sendFile(path_1.default.resolve('assets/resized/' +
            filename +
            '_' +
            height +
            '_' +
            width +
            '.jpg'));
    }
    else if ((typeof filename === 'string' && isNaN(height)) ||
        isNaN(width)) {
        res.sendFile(path_1.default.resolve('assets/full/' + filename + '.jpg'));
    }
    else {
        console.log('Unvalid Parameters.. Check and Retry.\n', '(', filename, typeof filename, ') ', '(', height, typeof height, ') ', '(', width, typeof width, ')');
    }
});
exports.default = preview;
