import fs from 'fs';

import { filename, height, width } from '../routes/api/resize';
import resizeImg from '../sharp/sharp';

const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';

function checkIfDoneBefore() {
    fs.readFile(RES_IMGS_CSV, function (err, data) {
        if (err) throw err;
        if (data.includes(filename + '_' + height + '_' + width + '.jpg')) {
            console.log('Same Image Resized Before with Same Height and Width.');
        }
        else {
            console.log(filename + '_' + height + '_' + width + '.jpg');

            // resizeImg(filename, height, width);
        }
    });
}

export default checkIfDoneBefore;
