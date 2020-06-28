'use strict';

const gCanvas = document.getElementById('canvas');
const gCtx = gCanvas.getContext('2d');

function init() {
    createImgs();
    renderGallery();
    renderKeywords();
}

function renderGallery(filteredImgs) {
    const imgs = filteredImgs || getImgs();
    const strHTMLs = imgs.map((img) => {
        return `<img class="img-item" 
                    data-id="${img.id}" 
                    onclick="onTogglePages('editor-page'); 
                    onImgClicked(${img.id})" 
                    src="${img.url}"
                    title="key-words: ${img.keywords.join()}"/>`
    })
    document.querySelector('.imgs-container').innerHTML = strHTMLs.join('');
}

function onTogglePages(pageClass) {
    const elImgsPage = document.querySelector('.imgs-page');
    const elEditorPage = document.querySelector('.editor-page');
    const elSavedPage = document.querySelector('.saved-page');
    const elsHtmls = [elImgsPage, elEditorPage, elSavedPage]

    elsHtmls.forEach(el => el.classList.value === pageClass ? el.style.display = 'block' : el.style.display = 'none')
    if (elImgsPage.style.display === 'block') renderGallery();
}

const elInputField = document.getElementById('user-text');
elInputField.addEventListener('input', function () {
    const userInput = document.getElementById('user-text').value;
    gMeme.txts[gMeme.selectedTxtIdx].line = userInput;
    renderMeme();
})

function onFilterImgs() {
    let val = document.querySelector('.search-input').value
    filterByKeyWord(val, false)  
}

function filterByKeyWord(keyword, bool) {
    const imgs = getImgs();
    if (keyword === '') renderGallery();
    let filteredImgs;
    bool ? filteredImgs = imgs.filter(img => img.keywords.includes(keyword)) : 
           filteredImgs = imgs.filter(img => img.keywords.join().includes(keyword));
    renderGallery(filteredImgs)
}
function getKeywords() {
    const imgs = getImgs();
    const wordsArray = imgs.flatMap(img => img.keywords);

    return wordsArray.reduce((counter, word) => {
        counter[word] === undefined ? counter[word] = 1 : counter[word] += 1;
        return counter;
    }, {})
}

function renderKeywords() {
    const keywords = getKeywords();
    let strHTMLs = '';
    for (let key in keywords) {
        const fontSize = 10 + (keywords[key] * 4);
        strHTMLs += `<span class="key-word" onclick="filterByKeyWord('${key}', true)" style="font-size:${fontSize}px;">${key}</span>`
    }
    document.querySelector('.key-words').innerHTML = strHTMLs;
}

function getImgElementById(id) {
    const elImgsArray = Array.from(document.querySelectorAll('.img-item'));
    const elImg = elImgsArray.find((el) => el.getAttribute("data-id") === id + '');
    return elImg;
}

function getMoreKeywords() {
    const elKeyword = document.querySelector('.key-words');
    const elBtn = document.querySelector('.more');
    elKeyword.style.flexWrap === "wrap" ? elKeyword.style.flexWrap = "nowrap" : elKeyword.style.flexWrap = "wrap";
    elBtn.innerText === "...less" ? elBtn.innerText = "more..." : elBtn.innerText = "...less"; 
}

// Img clicked
function onImgClicked(imgId) {
    gMeme.selectedImgId = imgId;
    renderMeme();
}

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

function txtOnCanvas(txtObj) {
    gCtx.font = `${txtObj.size}px ${txtObj.font}`;
    gCtx.fillStyle = txtObj.txtColor;
    gCtx.textAlign = `${txtObj.align}`;
    gCtx.fillText(txtObj.line, txtObj.x, txtObj.y);
    gCtx.strokeStyle = `${txtObj.strokeColor}`;
    gCtx.strokeText(txtObj.line, txtObj.x, txtObj.y)
}


function onChangeTxtColor() {
    const elUserColor = document.getElementById('user-txt-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].txtColor = `${elUserColor}`;
    renderMeme()
}
function onChangeStrokeColor() {
    const elUserColor = document.getElementById('user-stroke-color').value;
    gMeme.txts[gMeme.selectedTxtIdx].strokeColor = `${elUserColor}`;
    renderMeme()
}

function onChangeFont() {
    const elUserFont = document.querySelector('.font-input').value;
    gMeme.txts[gMeme.selectedTxtIdx].font = `${elUserFont}`;

    renderMeme()
}


function onIncreaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size += 2;
    renderMeme()
}
function onDecreaseSize() {
    gMeme.txts[gMeme.selectedTxtIdx].size -= 2;
    renderMeme()
}


function onDeleteLine() {
    gMeme.txts[gMeme.selectedTxtIdx].line = '';
    elInputField.value = '';
    renderMeme()
}

function onMoveUpLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y -= 2;
    renderMeme()
}
function onMoveDownLine() {
    gMeme.txts[gMeme.selectedTxtIdx].y += 2;
    renderMeme()
}

function onToggleLines() {
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

function onAlign(alignTo) {
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
    renderMeme();
}

function downloadImg(elLink) {
    const imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
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
