'use strict'

var gCanvas = document.getElementById('canvas');

var gCtx = gCanvas.getContext('2d');
console.log(gCtx)

var elImg = document.getElementById('img-example').src;
console.log(elImg);


elImg.addEventListener('click', drawImg(this));

function drawImg(image) {
    gCtx.drawImage(image, 0, 0, gCanvas.width, gCanvas.height)
}













// function init() {
//     resize();
// }

// function resize() {
//     let elContainer = document.querySelector('.canvas-container');
    
//     gCanvas.width = elContainer.offsetWidth;
//     gCanvas.height = elContainer.offsetHeight;
// }




