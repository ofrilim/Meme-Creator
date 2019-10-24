// 'use strict';

var gIdx = 1;
var gImgs;

var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ] 
}

// get the gImgs objects array
function getImgs() {
    return gImgs;
}

// create an array of objects containing: imgId, imgUrl, words
function createImgs() {
    gImgs = [
        createImg(gIdx++, 'meme-imgs/2.jpg', ['happy', 'woman']),
        createImg(gIdx++, 'meme-imgs/004.jpg', ['animal', 'dog']),
        createImg(gIdx++, 'meme-imgs/005.jpg', ['dog', 'baby']),
        createImg(gIdx++, 'meme-imgs/5.jpg', ['cool', 'winner']),
        createImg(gIdx++, 'meme-imgs/006.jpg', ['cat', 'animal']),
        createImg(gIdx++, 'meme-imgs/8.jpg', ['man', 'happy']),
        createImg(gIdx++, 'meme-imgs/9.jpg', ['funny', 'boy']),
        createImg(gIdx++, 'meme-imgs/12.jpg', ['man', 'you']),
        createImg(gIdx++, 'meme-imgs/19.jpg', ['angry', 'man'])
    ]
}

// create single img object
function createImg(id, url, keywords) {
    return {
        id,
        url,
        keywords
    }
}

// get the img object by the id
function getImgById(id) {
    return gImgs.find((img) => img.id === id) 
}

 