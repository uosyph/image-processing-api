// create a csv file containing images' names in assets/full/

import fs from 'fs';

// images directory
const OG_IMGS_DIR = './assets/full/';
// read files' names
const IMGS_NAMES = fs.readdirSync(OG_IMGS_DIR).join('\n');
// where to save the csv file
const OG_IMGS_CSV = './assets/full/exsistingImgs.csv';

// write the file and store it
function imgLogger() {
    fs.writeFile(OG_IMGS_CSV, IMGS_NAMES, function (err) {
        if (err) throw err;
        else
            console.log(
                "Orignal Images Names Saved into 'assets/full/exsistingImgs.csv'"
            );
    });
}

export default imgLogger;
export { OG_IMGS_CSV };
