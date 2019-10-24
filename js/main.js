'use strict'

var gX, gY;
var currImg;

var gCanvas = document.getElementById('canvas');
var gCtx = gCanvas.getContext('2d');

function init() {
    createImgs();
    renderGallery();
}

// render the img gallery on index.html
function renderGallery() {
    var imgs =  getImgs();   
    var strHTML = imgs.map((img) => {

        return `<img class="img-item" data-id="${img.id}" onclick="onTogglePages(); onImgClicked(this, ${img.id})" src="${img.url}"/>`
    })
    document.querySelector('.imgs-container').innerHTML = strHTML.join('');
}


var elInputField = document.getElementById('user-text');

elInputField.addEventListener('input', function() {
    var userInput = document.getElementById('user-text').value;
    gMeme.txts[0].line = userInput;

    renderMeme();
})

// img clicked
function onImgClicked(elImg, imgId) {       
    gMeme.selectedImgId = imgId;
    currImg = elImg;
    
    renderMeme();
}

// render meme and txt to canvas
function renderMeme() {    
    drawImgOnCanvas(currImg);
    txtOnCanvas(gMeme.txts[0].line, gMeme.txts[0].color);
}

function drawImgOnCanvas(img) {
    img.width = gCanvas.width;
    img.height = gCanvas.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

// in future that func will get other values as user desire
function txtOnCanvas(txt, color) {
    gCtx.font="60px Comic Sans MS";
    gCtx.fillStyle = color;
    gCtx.textAlign = "center";
    gCtx.fillText(txt, 300, 100);
}

// get the x,y from clicking the canvas - for the next step - controling a few lines of input
// at the moment - just print the clicked spot
gCanvas.addEventListener('click', (ev) => {
    gX = ev.offsetX;
    gY = ev.offsetY;
    console.log(gX , gY)
})


function onTogglePages() {
    var elfirstPage = document.querySelector('.first-page')
    if (elfirstPage.style.display === "none") elfirstPage.style.display = "block";
        else elfirstPage.style.display = "none";
    
    var elSecondPage = document.querySelector('.second-page');
    if (elSecondPage.style.display === "none") elSecondPage.style.display = "block";
        else elSecondPage.style.display = "none";
}

function onGetColor() {
    let elUserColor = document.getElementById("user-color").value;
    return `${elUserColor}`;
}




// function onChangeFont() {
// }
