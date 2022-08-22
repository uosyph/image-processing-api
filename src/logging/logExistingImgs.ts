// create a CSV file containing images names in assets/full/
// and any time the API tries to resize an image, it checks first the CSV file to see if it exists done

import fs from 'fs';

// images directory
const OG_IMGS_DIR = './assets/full/';
// read files names
const IMGS_NAMES = fs.readdirSync(OG_IMGS_DIR).join('\n');
// where to save the CSV file
const OG_IMGS_CSV = './assets/full/.exsistingImgs.csv';

// write to the file and save it
async function imgLogger() {
    fs.writeFile(OG_IMGS_CSV, IMGS_NAMES, function (err) {
        if (err) throw err;
        else {
            console.log(
                "Orignal Images Names Saved to 'assets/full/.exsistingImgs.csv'"
            );
        }
    });
}

export default imgLogger;
export { OG_IMGS_CSV };
