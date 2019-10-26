'use strict'

var gCanvas = document.getElementById('canvas');
var gCtx = gCanvas.getContext('2d');

function init() {
    createImgs();
    renderGallery();
}

function renderGallery() {
    let imgs =  getImgs();   
    let strHTML = imgs.map((img) => {

        return `<img class="img-item" data-id="${img.id}" onclick="onTogglePages(); onImgClicked(${img.id})" src="${img.url}"/>`
    })
    document.querySelector('.imgs-container').innerHTML = strHTML.join('');
}

function onTogglePages() {
    let elfirstPage = document.querySelector('.first-page')
    let elSecondPage = document.querySelector('.second-page');

    if (elfirstPage.style.display === "none"){
        elfirstPage.style.display = "block";
        elSecondPage.style.display = "none";
    } else {
        elfirstPage.style.display = "none";
        elSecondPage.style.display = "block";
    }
}


var elInputField = document.getElementById('user-text');

elInputField.addEventListener('input', function() {
    let userInput = document.getElementById('user-text').value;
    gMeme.txts[gMeme.selectedTxtIdx].line = userInput;

    renderMeme();
})

function getImgElementById(id){
    let elImgsArray = Array.from(document.querySelectorAll('.img-item'));
    let elImg = elImgsArray.find((el) => el.getAttribute("data-id") == id);
    return elImg;
}

// img clicked
function onImgClicked(imgId) {       
    gMeme.selectedImgId = imgId;
    
    getImgElementById(imgId)
    renderMeme();
}

// render meme and txt to canvas
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

function txtOnCanvas(txtObj) {
    gCtx.font= `${txtObj.size}px ${txtObj.font}`;
    gCtx.fillStyle = txtObj.txtColor;
    gCtx.textAlign = `${txtObj.align}`;
    gCtx.fillText(txtObj.line, txtObj.x, txtObj.y);
    gCtx.strokeStyle = `${txtObj.strokeColor}`;
    gCtx.strokeText(txtObj.line, txtObj.x, txtObj.y)
}


function onChangeTxtColor() {
    let elUserColor = document.getElementById('user-txt-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].txtColor = `${elUserColor}`;
    renderMeme()
}
function onChangeStrokeColor() {
    let elUserColor = document.getElementById('user-stroke-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].strokeColor = `${elUserColor}`;
    renderMeme()
}


function onChangeFont() {
    let elUserFont = document.querySelector('.font-input').value;
    gMeme.txts[gMeme.selectedTxtIdx].font = `${elUserFont}`;
    renderMeme()    
}


function onIncreaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size++;
    renderMeme()    
}
function onDecreaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size--;
    renderMeme()    
}


function onDeleteLine() {
    gMeme.txts[gMeme.selectedTxtIdx].line = '';
    elInputField.value = '';
    renderMeme()
}


function onMoveUpLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y--;
    renderMeme()
}
function onMoveDownLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y++;
    renderMeme()
}


function onToggleLines() {
    switch(gMeme.selectedTxtIdx) {
        case 0:
            gMeme.selectedTxtIdx = 1;
            elInputField.value = gMeme.txts[1].line;
            break;
        case 1:
            gMeme.selectedTxtIdx = 0;
            elInputField.value = gMeme.txts[0].line;
    }
}


function onAlign(alignTo) {
    let txtToAlign = gMeme.txts[gMeme.selectedTxtIdx]
    switch(alignTo) {
        case 'left': 
            txtToAlign.align = 'left';
            txtToAlign.x = 30;
            break;
        case 'center':
            txtToAlign.align = 'center';
            txtToAlign.x = 280;
            break;
        case 'right':
            txtToAlign.align = 'right';
            txtToAlign.x = 520;
            break;
    }
    renderMeme();
}


