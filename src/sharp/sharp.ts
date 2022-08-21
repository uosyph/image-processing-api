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
                'Image has been resized and save to' +
                    './assets/resized/' +
                    filename +
                    '_' +
                    height +
                    '_' +
                    width +
                    '.jpg'
            );
            console.log('Image has been resized');

            resImgLogger();
        });
}

export default resizeImg;
export { resImgName };
