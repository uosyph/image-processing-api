import express from 'express';
import path from 'path';

const preview = express.Router();

preview.get('/', (req, res) => {
    const filename = String(req.query.filename);
    const height = Number(req.query.height);
    const width = Number(req.query.width);

    //check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        res.sendFile(
            path.resolve(
                'assets/resized/' +
                    filename +
                    '_' +
                    height +
                    '_' +
                    width +
                    '.jpg'
            )
        );
    } else if (
        (typeof filename === 'string' && isNaN(height)) ||
        isNaN(width)
    ) {
        res.sendFile(path.resolve('assets/full/' + filename + '.jpg'));
    } else {
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
