import fs from 'fs';
import preview from '../routes/api/preview';
import { filename } from '../routes/api/resize';

function previewOGImg(resImgPath : string) {
    const PATH = '.assets/full' + filename +'.jpg'
    // ejs.render(PATH);
    preview.get('api/preview/', function(req, res) {
        res.render('../views/index');
    });
}

export default previewOGImg;
