import sharp from 'sharp';
import resImgLogger from '../logging/logResizedImg';

let resImgName: string;

async function resizeImg(filename: string, height: number, width: number) {
    resImgName = String(filename + '_' + height + '_' + width + '.jpg');

    sharp('./assets/full/' + filename + '.jpg')
        .resize(width, height, {
            kernel: sharp.kernel.nearest,
            fit: 'contain',
            position: 'right top',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 },
        })
        .toFile(
            './assets/resized/' + filename + '_' + height + '_' + width + '.jpg'
        )
        .then(() => {
            console.log(
                'Image has been resized and saved to' + './assets/resized/' + filename + '_' + height + '_' + width + '.jpg' + '\n' + 'To Preview it go to http://localhost:3000/api/resize/?filename=' + filename + '&height=' + height + '&width=' + width
            );

            // call func to save image name and dimensions to .resizedImgs.csv
            resImgLogger();
        });
}

export default resizeImg;
export { resImgName };
