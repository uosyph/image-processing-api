import express from 'express';

const preview = express.Router();

preview.get ('/', (req, res) => {
    let filename = String(req.query.filename);
    let height = Number(req.query.height);
    let width = Number(req.query.width);

    //check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        var imgPath = "/resized/" + filename + "_" + height + "_" + width + ".jpg";
        res.render('resized', { imgPath: imgPath } );
    }
    else if (typeof filename === 'string' && isNaN(height) && isNaN(width)) {
        var imgPath = "/full/" + filename + ".jpg";
        res.render('resized', { imgPath: imgPath } );    
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
