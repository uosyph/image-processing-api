import express from 'express';
import ejs from 'ejs';
import fs from 'fs';
import resize, { filename, height, width } from '../routes/api/resize';

function previewImg(resImgPath : string, height: number, width: number) {
    const PATH = '.assets/resized' + filename + '_' + height + '_' + width + '.jpg'
    // ejs.render(PATH);
    resize.get('api/resize/', function(req, res) {
        res.render('../views/resized');
    });
}

export default previewImg;
