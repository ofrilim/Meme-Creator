'use strict';

const gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            font: 'IMPACT',
            size: 40,
            align: 'center',
            txtColor: 'white',
            strokeColor: 'black',
            y: 100,
            x: 280
        },
        {
            line: '',
            font: 'IMPACT',
            size: 40,
            align: 'center',
            txtColor: 'white',
            strokeColor: 'black',
            y: 480,
            x: 280
        }
    ]  
}

// Get the imgs objects array
function getImgs() {
    return createImgs();
}

// Create an array of objects containing: imgId, imgUrl, keywords
function createImgs() {
    let imgId = 101;

    return [
        createImg(imgId++, 'meme-imgs/002.jpg', ['happy', 'woman', 'view']),
        createImg(imgId++, 'meme-imgs/003.jpg', ['funny', 'man', 'trump']),
        createImg(imgId++, 'meme-imgs/004.jpg', ['dog', 'sweet', 'animal']),
        createImg(imgId++, 'meme-imgs/005.jpg', ['boy', 'baby', 'win']),
        createImg(imgId++, 'meme-imgs/006.jpg', ['cat', 'animal', 'sleep', 'sweet']),
        createImg(imgId++, 'meme-imgs/007.jpg', ['baby', 'dog', 'sweet', 'sleep']),
        createImg(imgId++, 'meme-imgs/008.jpg', ['man', 'clown', 'smile']),
        createImg(imgId++, 'meme-imgs/009.jpg', ['boy', 'baby', 'funny', 'smile']),
        createImg(imgId++, 'meme-imgs/010.jpg', ['smile', 'happy', 'boy']),
        createImg(imgId++, 'meme-imgs/011.jpg', ['you', 'man']),
        createImg(imgId++, 'meme-imgs/012.jpg', ['man', 'angry']),
        createImg(imgId++, 'meme-imgs/013.jpg', ['man', 'kiss', 'sport']),
    ]
}

// Create single img object
function createImg(id, url, keywords) {
    return {
        id,
        url,
        keywords
    }
}

// Get the img object by the id
function getImgById(id) {
    return gImgs.find((img) => img.id === id) 
}
