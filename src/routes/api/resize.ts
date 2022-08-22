import express from 'express';
import checkIfDoneBefore from '../../validity/imgResBefore';

const resize = express.Router();

let filename: string;
let height: number;
let width: number;

resize.get('/', (req, res) => {
    res.send(
        'Resize Route. Example: localhost:3000/api/resize/?filename=<ImageName>&height=<height>&width=<width>'
    );

    // take params from URL
    filename = String(req.query.filename);
    height = Number(req.query.height);
    width = Number(req.query.width);

    // check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        console.log('Valid Parameters. Processing...');
        // if params are correct check the image if resized before with same dimensions
        checkIfDoneBefore();
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

export default resize;
export { filename, height, width };
