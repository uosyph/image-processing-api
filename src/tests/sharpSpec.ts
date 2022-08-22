import fs from 'fs';
import resizeImg, { resImgName } from '../sharp/sharp';

describe('Image Resized Probably', () => {
    it('Resized The image', () => {
        expect(resizeImg).toBeDefined();
        expect(fs.existsSync(`asstes/resized/` + resImgName)).toBeFalsy();
    });
});
