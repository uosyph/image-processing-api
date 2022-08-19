"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resImgName = void 0;
const logResizedImg_1 = __importDefault(require("../logging/logResizedImg"));
let resImgName;
exports.resImgName = resImgName;
function resizeImg(filename, height, width) {
    exports.resImgName = resImgName = String(filename + '_' + height + '_' + width + '.jpg');
    // sharp
    (0, logResizedImg_1.default)();
    console.log('Image has been resized');
    // open resImgName
}
exports.default = resizeImg;
