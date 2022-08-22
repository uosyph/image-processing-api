// check if the image name and dimensions provided in the URL exists in the assets/resized/ directory
// by checking the .resizedImgs.csv file to find a match

import fs from 'fs';
import { filename, height, width } from '../routes/api/resize';
import checkImg from './imgExisits';

const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';

async function checkIfDoneBefore() {
    // read .resizedImgs.csv and search for the image name in it
    fs.readFile(RES_IMGS_CSV, function (err, data) {
        if (err) throw err;
        // if the image resized before with same dimensions log its name
        if (data.includes(filename + '_' + height + '_' + width + '.jpg')) {
            console.log(
                'The same image has been resized before with the same Height and Width.\nTo Preview it go to:\nhttp://localhost:3000/api/preview/?filename=' +
                    filename +
                    '&height=' +
                    height +
                    '&width=' +
                    width
            );
        } else {
            // if image hasn't been resized before with same dimensions; call the func to check if the image even exists
            checkImg();
        }
    });
}

export default checkIfDoneBefore;
