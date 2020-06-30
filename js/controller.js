'use strict';
// The controller file is responsible for updating gMeme (the model) with every change

function imgClicked(imgId) {
    gMeme.selectedImgId = imgId;
}

function changeTxtColor() {
    const elUserColor = document.getElementById('user-txt-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].txtColor = `${elUserColor}`;
}

function changeStrokeColor() {
    const elUserColor = document.getElementById('user-stroke-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].strokeColor = `${elUserColor}`;
}

function changeFont() {
    const elUserFont = document.querySelector('.font-input').value;
    gMeme.txts[gMeme.selectedTxtIdx].font = `${elUserFont}`;
}

function increaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size += 2;
}

function decreaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size -= 2;
}

function deleteLine() {
    gMeme.txts[gMeme.selectedTxtIdx].line = '';
    elInputField.value = '';
}

function moveUpLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y -= 2;
}

function moveDownLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y += 2;
}

function toggleLines() {
    switch (gMeme.selectedTxtIdx) {
        case 0:
            gMeme.selectedTxtIdx = 1;
            elInputField.value = gMeme.txts[1].line;
            break;
        case 1:
            gMeme.selectedTxtIdx = 0;
            elInputField.value = gMeme.txts[0].line;
    }
}

function align(alignTo) {
    const txtToAlign = gMeme.txts[gMeme.selectedTxtIdx]
    switch (alignTo) {
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
}
