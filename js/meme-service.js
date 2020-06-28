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
        createImg(imgId++, 'meme-imgs/010.jpg', ['happy', 'smile', 'boy']),
        createImg(imgId++, 'meme-imgs/005.jpg', ['win', 'baby', 'boy']),
        createImg(imgId++, 'meme-imgs/004.jpg', ['dog', 'sweet', 'animal']),
        createImg(imgId++, 'meme-imgs/003.jpg', ['funny', 'man', 'trump', 'president']),
        createImg(imgId++, 'meme-imgs/006.jpg', ['cat', 'animal', 'sleep', 'sweet']),
        createImg(imgId++, 'meme-imgs/002.jpg', ['happy', 'woman', 'view']),
        createImg(imgId++, 'meme-imgs/007.jpg', ['baby', 'dog', 'sweet', 'sleep']),
        createImg(imgId++, 'meme-imgs/008.jpg', ['man', 'clown', 'smile']),
        createImg(imgId++, 'meme-imgs/009.jpg', ['boy', 'baby', 'funny', 'smile']),
        createImg(imgId++, 'meme-imgs/011.jpg', ['you', 'man']),
        createImg(imgId++, 'meme-imgs/012.jpg', ['man', 'angry']),
        createImg(imgId++, 'meme-imgs/013.jpg', ['man', 'kiss', 'sport']),
        createImg(imgId++, 'meme-imgs/014.jpg', ['man']),
        createImg(imgId++, 'meme-imgs/015.jpg', ['boy', 'baby', 'funny']),
        createImg(imgId++, 'meme-imgs/016.jpg', ['man', 'trump', 'president']),
        createImg(imgId++, 'meme-imgs/017.jpg', ['dog', 'funny', 'animal']),
        createImg(imgId++, 'meme-imgs/018.jpg', ['man', 'smile', 'obama','funny', 'president']),
        createImg(imgId++, 'meme-imgs/019.jpg', ['man', 'smile', 'leo', 'cheers']),
        createImg(imgId++, 'meme-imgs/020.jpg', ['woman', 'smile', 'oprah', 'you']),
        createImg(imgId++, 'meme-imgs/021.jpg', ['man', 'smile']),
        createImg(imgId++, 'meme-imgs/022.jpg', ['man', 'putin', 'president']),
        createImg(imgId++, 'meme-imgs/023.jpg', ['man', 'smile']),
        createImg(imgId++, 'meme-imgs/024.jpg', ['toys', 'smile']),
        createImg(imgId++, 'meme-imgs/025.jpg', ['man', 'smile']),
        createImg(imgId++, 'meme-imgs/026.jpg', ['man']),
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
