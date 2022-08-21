// after resizing an image display it
// NOT IMPLEMENTED YET

async function previewImg(resImgPath: string, height: number, width: number) {

    if (typeof resImgPath === 'string' && !isNaN(height) && !isNaN(width)) {
    }
    else if ((typeof resImgPath === 'string' && isNaN(height)) || isNaN(width)) {
    }
}

export default previewImg;
