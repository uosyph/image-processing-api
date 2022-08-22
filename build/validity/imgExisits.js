"use strict";
// check if the image name provided in the URL exists in the assets/full/ directory
// by checking the .existingImgs.csv file to find a match
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
const logExistingImgs_1 = require("../logging/logExistingImgs");
const resize_1 = require("../routes/api/resize");
const sharp_1 = __importDefault(require("../sharp/sharp"));
function checkImg() {
    return __awaiter(this, void 0, void 0, function* () {
        // read .existingImgs.csv and search for the image name in it
        fs_1.default.readFile(logExistingImgs_1.OG_IMGS_CSV, function (err, data) {
            if (err)
                throw err;
            if (data.includes('\n' + resize_1.filename + '.jpg')) {
                console.log('Valid Image Name. Processing...');
                // if image exists call the func to resize the image
                (0, sharp_1.default)(resize_1.filename, resize_1.height, resize_1.width);
            }
            else {
                console.log('Unvalid Image Name.. Check and Retry.');
            }
        });
    });
}
exports.default = checkImg;
