import express from 'express';
import ejs from 'ejs';
import fs from 'fs';
import { resImgName } from '../sharp/sharp';
import resize, { filename } from '../routes/api/resize';
import preview from '../routes/api/preview';
import app from '../app';
import routes from '../routes';

function previewImg(resImgPath: string, height: number, width: number) {
    const PATH =
        'api/preview/?filename=' +
        resImgPath +
        '&height=' +
        height +
        '&width=' +
        width;
    console.log('--------------still need to render--------------');

    routes.get('/', (req, res) => {
        res.redirect(PATH);
        console.log(PATH);
    });
}

export default previewImg;
