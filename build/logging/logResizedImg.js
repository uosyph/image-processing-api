"use strict";
// write the resized image name, width and height into a JSON file
// and any time the API tries to resize an image, it checks first the JSON file to see if it's already done
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
// the code below checks if the image is resized before but in the ./assets/resized directory
// this method is slower than the first method (reading info from JSON file)
const fs_1 = __importDefault(require("fs"));
function resImgLogger() {
    return __awaiter(this, void 0, void 0, function* () {
        const RES_IMGS_DIR = './assets/resized/';
        const IMGS_NAMES = fs_1.default.readdirSync(RES_IMGS_DIR).join('\n');
        const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';
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
