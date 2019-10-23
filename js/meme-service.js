// 'use strict';

var gIdx = 1;
var gImgs; 



function createImgs() {
    createImg(gIdx, 'meme-imgs/003.jpg', ['happy', 'women']),
    // createImg(gIdx, 'meme-imgs/3.jpg', ['happy', 'women'])
}

function createImg(id, url, keywords) {
    return {
        id,
        url,
        keywords
    }
}


 