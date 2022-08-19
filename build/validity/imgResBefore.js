"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const resize_1 = require("../routes/api/resize");
// const IMG_NAME = filename + '_' + height + '_' + width + '.jpg';
const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';
function checkIfDoneBefore() {
    fs_1.default.readFile(RES_IMGS_CSV, function (err, data) {
        if (err)
            throw err;
        if (data.includes(resize_1.filename + '_' + resize_1.height + '_' + resize_1.width + '.jpg')) {
            console.log('Same Image Resized Before with Same Height and Width.');
        }
        else {
            console.log('image with same dem 404');
            console.log(resize_1.filename + '_' + resize_1.height + '_' + resize_1.width + '.jpg');
            // resizeImg(filename, height, width);
        }
    });
}
exports.default = checkIfDoneBefore;
