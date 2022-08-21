// check if the image name provided in the URL exists in the assets/full directory
// by checking the existingImgs.csv file to find a match

import fs from 'fs';
import { OG_IMGS_CSV } from '../logging/logExistingImgs';
import { filename, height, width } from '../routes/api/resize';
import resizeImg from '../sharp/sharp';

function checkImg() {
    fs.readFile(OG_IMGS_CSV, function (err, data) {
        if (err) throw err;
        if (data.includes('\n' + filename + '.jpg')) {
            console.log('Processing...');

            resizeImg(filename, height, width);
        } else {
            console.log('Unvalid Image Name.. Check and Retry.');
        }
    });
}

export default checkImg;
