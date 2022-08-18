"use strict";
// create a csv file containing images' names in assets/full/ 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OG_IMGS_CSV = void 0;
const fs_1 = __importDefault(require("fs"));
// images directory
const OG_IMGS_DIR = './assets/full/';
// read files' names
const IMGS_NAMES = fs_1.default.readdirSync(OG_IMGS_DIR).join('\n');
// where to save the csv file
const OG_IMGS_CSV = './assets/full/exsistingImgs.csv';
exports.OG_IMGS_CSV = OG_IMGS_CSV;
// write the file and store it
function imgLogger() {
    fs_1.default.writeFile(OG_IMGS_CSV, IMGS_NAMES, function (err) {
        if (err)
            throw err;
        else
            console.log('Orignal Images Names Saved into \'assets/full/exsistingImgs.csv\'');
    });
}
exports.default = imgLogger;
