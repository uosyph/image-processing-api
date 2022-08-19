"use strict";
// check if the image name provided in the URL exists in the assets/full directory
// by checking the existingImgs.csv file to find a match
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const logExistingImgs_1 = require("../logging/logExistingImgs");
const resize_1 = require("../routes/api/resize");
const imgResBefore_1 = __importDefault(require("./imgResBefore"));
function checkImg() {
    fs_1.default.readFile(logExistingImgs_1.OG_IMGS_CSV, function (err, data) {
        if (err)
            throw err;
        if (data.includes('\n' + resize_1.filename + '.jpg')) {
            console.log('Valid Image Name. Processing...');
            (0, imgResBefore_1.default)();
        }
        else {
            console.log('Unvalid Image Name.. Check and Retry.');
        }
    });
}
exports.default = checkImg;