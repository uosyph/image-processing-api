"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const preview = express_1.default.Router();
preview.get('/', (req, res) => {
    // take params from URL
    const filename = String(req.query.filename);
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    // if the URL params coninats filename, height and width : check for the image in the assets/resized/ dir
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        res.sendFile(path_1.default.resolve('assets/resized/' +
            filename +
            '_' +
            height +
            '_' +
            width +
            '.jpg'));
    }
    // if the URL params contains only filename; or missing height or width : check for the image in the assets/full/ dir
    else if ((typeof filename === 'string' && isNaN(height)) || isNaN(width)) {
        res.sendFile(path_1.default.resolve('assets/full/' + filename + '.jpg'));
    }
    else {
        res.send('Preview Route. Example: localhost:3000/api/preview/?filename=<ImageName>&height=<height>&width=<width>\nOr localhost:3000/api/resize/?filename=<ImageName>');
        console.log('Unvalid Parameters.. Check and Retry.\n', '(', filename, typeof filename, ') ', '(', height, typeof height, ') ', '(', width, typeof width, ')');
    }
});
exports.default = preview;
