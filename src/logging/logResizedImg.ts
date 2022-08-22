// write the resized images names and dimensions into a CSV file in assets/resized/
// and any time the API tries to resize an image, it checks first the CSV file to see if it's already done before

import fs from 'fs';

async function resImgLogger() {
    // images directory
    const RES_IMGS_DIR = './assets/resized/';
    // read files names
    const IMGS_NAMES = fs.readdirSync(RES_IMGS_DIR).join('\n');
    // where to save the CSV file
    const RES_IMGS_CSV = './assets/resized/.resizedImgs.csv';

    // write to the file and save it
    fs.writeFile(RES_IMGS_CSV, IMGS_NAMES + '\n', function (err) {
        if (err) throw err;
        else {
            console.log(
                "Resized Image Name and Dimensions Saved to 'assets/resized/.resizedImgs.csv'"
            );
        }
    });
}

export default resImgLogger;
