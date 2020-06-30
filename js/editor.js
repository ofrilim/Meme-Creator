'use strict';
// Editor file responsible for updating the canvas element

const gCanvas = document.getElementById('canvas');
const gCtx = gCanvas.getContext('2d');

// Render meme and txt to canvas
function renderMeme() {
    drawImgOnCanvas(getImgElementById(gMeme.selectedImgId));
    txtOnCanvas(gMeme.txts[0]);
    txtOnCanvas(gMeme.txts[1]);
}

function drawImgOnCanvas(img) {
    img.width = gCanvas.width;
    img.height = gCanvas.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function getImgElementById(id) {
    const elImgsArray = Array.from(document.querySelectorAll('.img-item'));
    let elImg = elImgsArray.find((el) => el.getAttribute("data-id") === id + '');
    if (!elImg) elImg = elUsersImage;
    return elImg;
}

function txtOnCanvas(txtObj) {
    gCtx.font = `${txtObj.size}px ${txtObj.font}`;
    gCtx.fillStyle = txtObj.txtColor;
    gCtx.textAlign = `${txtObj.align}`;
    gCtx.fillText(txtObj.line, txtObj.x, txtObj.y);
    gCtx.strokeStyle = `${txtObj.strokeColor}`;
    gCtx.strokeText(txtObj.line, txtObj.x, txtObj.y)
}


// Helper function:
// Get the x,y from clicking the canvas, print the clicked spot
gCanvas.addEventListener('click', (ev) => {
    const gX = ev.offsetX;
    const gY = ev.offsetY;
    console.log(gX, gY)
    if (0 < gY && gY < 183) {
        console.log('first line')
    }
    if (367 < gY && gY < 550) {
        console.log('second line')
    }
})

