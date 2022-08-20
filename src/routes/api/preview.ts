import express from 'express';

import previewImg from '../../preview/preview';
import previewOGImg from '../../preview/previewOG'

const preview = express.Router();

let filename: string;
let height: number;
let width: number;

preview.get ('/', (req, res) => {
    res.send('Preview Image');

    filename = String(req.query.filename);
    height = Number(req.query.height);
    width = Number(req.query.width);

    //check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        previewImg(filename, height, width);
    }
    else if(typeof filename === 'string' && isNaN(height) && isNaN(width)) {
        previewOGImg(filename);
    }
    else {
        console.log(
            'Unvalid Parameters.. Check and Retry.\n',
            '(',
            filename,
            typeof filename,
            ') ',
            '(',
            height,
            typeof height,
            ') ',
            '(',
            width,
            typeof width,
            ')'
        );
    }
});

export default preview;
