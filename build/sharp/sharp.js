"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resImgName = void 0;
const sharp_1 = __importDefault(require("sharp"));
const logResizedImg_1 = __importDefault(require("../logging/logResizedImg"));
const preview_1 = __importDefault(require("../preview/preview"));
let resImgName;
exports.resImgName = resImgName;
function resizeImg(filename, height, width) {
    exports.resImgName = resImgName = String(filename + '_' + height + '_' + width + '.jpg');
    (0, sharp_1.default)('./assets/full/' + filename + '.jpg')
        .resize(width, height, {
        kernel: sharp_1.default.kernel.nearest,
        fit: 'contain',
        position: 'right top',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    })
        .toFile('./assets/resized/' + filename + '_' + height + '_' + width + '.jpg')
        .then(() => {
        (0, preview_1.default)(filename, height, width);
        console.log('Image has been resized and save to' +
            './assets/resized/' + filename + '_' + height + '_' + width + '.jpg');
        console.log('Image has been resized');
        (0, logResizedImg_1.default)();
    });
}
exports.default = resizeImg;
