import express from 'express';
import path from 'path';

const preview = express.Router();

preview.get('/', (req, res) => {
    // take params from URL
    const filename = String(req.query.filename);
    const height = Number(req.query.height);
    const width = Number(req.query.width);

    // if the URL params coninats filename, height and width : check for the image in the assets/resized/ dir
    if (typeof filename === 'string' && !isNaN(height) && !isNaN(width)) {
        res.sendFile(
            // if did find the image with the right dimensions : display it
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
                // if didn't find the image send show error message
                if (err) {
                    res.send('Unvalid Parameters.. Check and Retry.');
                    console.log(
                        'Unvalid Parameters.. Check and Retry.\n' +
                            '(' +
                            filename +
                            ' ' +
                            height +
                            ' ' +
                            width +
                            ')'
                    );
                }
            }
        );
    }
    // if the URL params contains only filename; or missing height or width : check for the image in the assets/full/ dir
    else if ((typeof filename === 'string' && isNaN(height)) || isNaN(width)) {
        // if did find the image : display it
        res.sendFile(
            path.resolve('assets/full/' + filename + '.jpg'),
            (err) => {
                // if didn't find the image send show error message
                if (err) {
                    res.send('Unvalid Image Name.. Check and Retry.');
                    console.log(
                        'Unvalid Image Name.. Check and Retry.\n' +
                            '(' +
                            filename +
                            ')'
                    );
                }
            }
        );
    } else {
        res.send(
            'Preview Route. Example: localhost:3000/api/preview/?filename=<ImageName>&height=<height>&width=<width> OR localhost:3000/api/preview/?filename=<ImageName>'
        );
    }
});

export default preview;
