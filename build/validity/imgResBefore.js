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
const fs_1 = __importDefault(require("fs"));
const resize_1 = require("../routes/api/resize");
const imgExisits_1 = __importDefault(require("./imgExisits"));
const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';
function checkIfDoneBefore() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.readFile(RES_IMGS_CSV, function (err, data) {
            if (err)
                throw err;
            if (data.includes(resize_1.filename + '_' + resize_1.height + '_' + resize_1.width + '.jpg')) {
                console.log('The same image has been resized before with the same Height and Width.');
                console.log(resize_1.filename + '_' + resize_1.height + '_' + resize_1.width + '.jpg');
            }
            else {
                console.log(resize_1.filename + '.jpg');
                (0, imgExisits_1.default)();
            }
        });
    });
}
exports.default = checkIfDoneBefore;
