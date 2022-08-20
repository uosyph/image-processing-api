"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = require("../routes/api/resize");
function previewOGImg(resImgPath) {
    var img = document.createElement("img");
    img.src = '.asstes/full/' + resize_1.filename + '.jpg';
    document.body.appendChild(img);
}
exports.default = previewOGImg;
