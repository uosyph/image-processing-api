"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resImgName = void 0;
const sharp_1 = __importDefault(require("sharp"));
const logResizedImg_1 = __importDefault(require("../logging/logResizedImg"));
let resImgName;
exports.resImgName = resImgName;
function resizeImg(filename, height, width) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.resImgName = resImgName = String(filename + '_' + height + '_' + width + '.jpg');
        (0, sharp_1.default)('./assets/full/' + filename + '.jpg')
            .resize(width, height, {
            kernel: sharp_1.default.kernel.nearest,
            fit: 'contain',
            position: 'right top',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 },
        })
            .toFile('./assets/resized/' + filename + '_' + height + '_' + width + '.jpg')
            .then(() => {
            console.log('Image has been resized and save to' +
                './assets/resized/' +
                filename +
                '_' +
                height +
                '_' +
                width +
                '.jpg');
            console.log('Image has been resized');
            (0, logResizedImg_1.default)();
        });
    });
}
exports.default = resizeImg;
