'use strict';

function init() {
    createImgs();
    renderGallery();
    renderKeywords();
}

async function renderGallery(filteredImgs) {
    const imgs = filteredImgs || await getImgs();
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
    if (elEditorPage.style.display === 'block') document.getElementById('user-text').focus();
}

const elInputField = document.getElementById('user-text');
elInputField.addEventListener('input', function () {
    const userInput = document.getElementById('user-text').value;
    gMeme.txts[gMeme.selectedTxtIdx].line = userInput;
    renderMeme();
})

function onFilterImgs() {
    const val = document.querySelector('.search-input').value
    filterByKeyWord(val, false)  
}

// A function get boolean as seconde parameter. 
// false - filter all the results that has the string in the keyword, true - filter for match whole string
async function filterByKeyWord(keyword, bool) {
    const imgs = await getImgs();
    if (keyword === '') renderGallery();
    let filteredImgs;
    bool ? filteredImgs = imgs.filter(img => img.keywords.includes(keyword.toLowerCase())) : 
           filteredImgs = imgs.filter(img => img.keywords.join().includes(keyword.toLowerCase()));
    renderGallery(filteredImgs)
}

async function getKeywords() {
    const imgs = await getImgs();
    const wordsArray = imgs.flatMap(img => img.keywords);

    return wordsArray.reduce((counter, word) => {
        counter[word] === undefined ? counter[word] = 1 : counter[word] += 1;
        return counter;
    }, {})
}

async function renderKeywords() {
    const keywords = await getKeywords();
    let strHTMLs = '';
    for (let key in keywords) {
        const fontSize = 10 + (keywords[key] * 4);
        strHTMLs += `<span class="key-word" onclick="filterByKeyWord('${key}', true)" style="font-size:${fontSize}px;">${key}</span>`
    }
    document.querySelector('.key-words').innerHTML = strHTMLs;
}

function onGetMoreKeywords() {
    const elKeyword = document.querySelector('.key-words');
    const elBtn = document.querySelector('.more');
    elKeyword.style.flexWrap === "wrap" ? elKeyword.style.flexWrap = "nowrap" : elKeyword.style.flexWrap = "wrap";
    elBtn.innerText === "...less" ? elBtn.innerText = "more..." : elBtn.innerText = "...less"; 
}

// Img clicked
function onImgClicked(imgId) {
    imgClicked(imgId);
    renderMeme()
}

function onChangeTxtColor() {
    changeTxtColor();
    renderMeme()
}
function onChangeStrokeColor() {
    changeStrokeColor();
    renderMeme()
}

function onChangeFont() {
    changeFont();
    renderMeme()
}
function onIncreaseSize() {
    increaseSize();
    renderMeme()
}
function onDecreaseSize() {
    decreaseSize();
    renderMeme()
}


function onDeleteLine() {
    deleteLine();
    renderMeme()
}

function onMoveUpLine() {
    moveUpLine();
    renderMeme()
}

function onMoveDownLine() {
    moveDownLine();
    renderMeme()
}

function onToggleLines() {
    toggleLines();
}

function onAlign(alignTo) {
    align(alignTo);
    renderMeme()
}
