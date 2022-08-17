"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// const resize = async (filename: string, height: number, width: number) => {
//     const 
// }
(0, sharp_1.default)('../../assets/resized/${filename}')
    .resize(200, 300)
    .toFile('../../assets/resized/${filename}_${height}_${width}.jpg');
