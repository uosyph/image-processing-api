import fs from 'fs';

import { filename, height, width } from '../routes/api/resize';
import checkImg from './imgExisits';

const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';

function checkIfDoneBefore() {
    fs.readFile(RES_IMGS_CSV, function (err, data) {
        if (err) throw err;
        if (data.includes(filename + '_' + height + '_' + width + '.jpg')) {
            console.log('The same image has been resized before with the same Height and Width.');
            console.log(filename + '_' + height + '_' + width + '.jpg');
            
            // open filename + '_' + height + '_' + width + '.jpg'
        }
        else {
            console.log(filename + '.jpg');
            checkImg();
        }
    });
}

export default checkIfDoneBefore;
