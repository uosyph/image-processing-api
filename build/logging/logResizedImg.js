"use strict";
// write the resized images names and dimensions into a CSV file in assets/resized/
// and any time the API tries to resize an image, it checks first the CSV file to see if it's already done before
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
function resImgLogger() {
    return __awaiter(this, void 0, void 0, function* () {
        // images directory
        const RES_IMGS_DIR = './assets/resized/';
        // read files names
        const IMGS_NAMES = fs_1.default.readdirSync(RES_IMGS_DIR).join('\n');
        // where to save the CSV file
        const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';
        // write to the file and save it
        fs_1.default.writeFile(RES_IMGS_CSV, IMGS_NAMES + '\n', function (err) {
            if (err)
                throw err;
            else {
                console.log("Resized Image Name and Dimensions Saved to 'assets/resized/.resizedImgs.csv'");
            }
        });
    });
}
exports.default = resImgLogger;
