// write the resized image name, width and height into a JSON file
// and any time the API tries to resize an image, it checks first the JSON file to see if it's already done

// the code below checks if the image is resized before but in the ./assets/resized directory
// this method is slower than the first method (reading info from JSON file)

import fs from 'fs';

const RES_IMGS_DIR = './assets/resized/';
const IMGS_NAMES = fs.readdirSync(RES_IMGS_DIR).join('\n');
const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';

function resImgLogger() {
    fs.writeFile(RES_IMGS_CSV, IMGS_NAMES + '\n', function (err) {
        if (err) throw err;
        else {
            console.log(
                "Resized Image Name and Dimensions Saved into 'assets/resized/.resizedImgs.csv'"
            );
        }
    });
}

export default resImgLogger;
