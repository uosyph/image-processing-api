import express from 'express';
import path from 'path';
import checkIfDoneBefore from '../../validity/imgResBefore';

const resize = express.Router();

let filename: string;
let height: number;
let width: number;

resize.get('/', (req, res) => {
    // take params from URL
    filename = String(req.query.filename);
    height = Number(req.query.height);
    width = Number(req.query.width);

    // preview resized image
    function PRE() {
        res.sendFile(
            path.resolve(
                'assets/resized/' +
                    filename +
                    '_' +
                    height +
                    '_' +
                    width +
                    '.jpg'
            ),
            (err) => {
                if (err) {
                    // if failed to load, load the orignal size image
                    res.sendFile(
                        path.resolve('assets/full/' + filename + '.jpg'),
                        (err) => {
                            if (err) {
                                res.send(
                                    'Resize Route. Example: localhost:3000/api/resize/?filename=<ImageName>&height=<height>&width=<width>'
                                );
                            }
                        }
                    );
                }
            }
        );
    }

    // check if the parameters in the URL are valid (filename: string, height and width: number)
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        // check if height or width equals to 0
        if (height === 0 || width === 0) {
            res.send(
                "Unvalid Dimensions. You Can't Resize an Image with 0 Height or Width."
            );
            console.log(
                "Unvalid Dimensions. You Can't Resize an Image with 0 Height or Width."
            );
        }

        // check if height or width are negative number to 0
        else if (height < 0 || width < 0) {
            res.send(
                "Unvalid Dimensions. You Can't Resize an Image with Negative Numbers."
            );
            console.log(
                "Unvalid Dimensions. You Can't Resize an Image with Negative Numbers."
            );
        }

        // check if both height and width are larger then 0
        else if (height > 0 && width > 0) {
            console.log('Valid Parameters. Processing...');
            setTimeout(PRE, 300);

            // if params are correct call the func to check if the image has been resized before with same dimensions
            checkIfDoneBefore();
        }

        // if any thing else went wrong
        else {
            res.send(
                'Resize Route. Example: localhost:3000/api/resize/?filename=<ImageName>&height=<height>&width=<width>'
            );
            console.log('Unvalid Parameters.. Check and Retry.');
        }
    }

    // if height or width contains any value other than a number; log error message
    else {
        res.send(
            'Resize Route. Example: localhost:3000/api/resize/?filename=<ImageName>&height=<height>&width=<width>'
        );

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
